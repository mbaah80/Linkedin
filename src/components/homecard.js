import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useDropzone} from 'react-dropzone'
import moment from 'moment';
import {createPost, getFeedPosts, likePost, commentPost,  reset} from "../features/post/postSlice";
import {followUser} from "../features/user/userSlice";
import Spinner from './spinner'
import './sidebars/sidebars.css'

let HomeCard = () =>{

    const dispatch = useDispatch();
    const [message, setMessage] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({accept: 'image/*'});


    const {user} = useSelector(state => state.auth)
    const {posts, isError, isSuccess, isLoading, message: msg} = useSelector((state) => state.post)


    useEffect(()=>{
        if(isError){
            setError(msg)
        }
        if(isSuccess){
            setMessage(msg)
        }
    },[user,isError, isSuccess, isLoading, msg, dispatch])

    useEffect(() => {
        dispatch(getFeedPosts())
    }, [dispatch])

    const files = acceptedFiles.map(file => (
        <img className="card-img-top feedImage" key={file.path} src={URL.createObjectURL(file)} alt={file.name} />
    ));
    let postHandler = (e) =>{
        e.preventDefault();

        const postData = new FormData();
        postData.append('message', message)
        acceptedFiles.forEach(file => postData.append('picturePath', file));
        dispatch(createPost(postData))
    }

    let followHandler = (userId) =>{
        dispatch(followUser(userId))
    }

    let likePostHanlder = (postId) =>{
        dispatch(likePost(postId))
    }
    let sendPostHandler = async (post) =>{
        try {
            let newPost = {
                text: post.message,
                picturePath: post.picturePath,
                userPicturePath: post.userPicturePath,
                name: post.name,
                occupation: post.occupation,
                _id: post._id,
                userId: post.userId,
                url: post.url,
            }
           alert("will be implemented soon")
        }catch (e) {
            console.log(e)
        }
    }
    let sendCommentHandler = async (postId) =>{
        let newComment = {
            comment: comment,
            postId: postId,
        }
        if(comment.length > 0){
            dispatch(commentPost(newComment))
        }else{
            alert("Please enter a comment")
        }
    }


    return(
        <div className="col-md-5 homeCard">
           <div className="card">
            <div className="card-body">
                <div className="feedContainer">
                    <img src={`http://localhost:3002/profile/${user.user.picturePath}`}  className="profileAvatar" />
                    <div className="avatarInfo">
                        <button className="btn btn-primary btn-sm SearchBtn" data-toggle="modal" data-target=".bd-example-modal-lg">Start a post</button>
                    </div>
                </div>
                <div className="card-footer startPostFooter">
                    <a href="#" className="btn btn-default"><i className="fa fa-picture-o" aria-hidden="true"></i> Photo</a>
                    <a href="#" className="btn btn-default"><i className="fa fa-file-video-o" aria-hidden="true"></i> Video</a>
                    <a href="#" className="btn btn-default"><i className="fa fa-calendar-check-o" aria-hidden="true"></i> Event</a>
                    <a href="#" className="btn btn-default"><i className="fa fa-newspaper-o" aria-hidden="true"></i> Write article</a>
            </div>
            </div>
           </div>

            {
                posts.map(post=>(
                    <div key={post._id} className="card mt-2 mb-2">
                        <div className="feedContainer mt-4 ml-4">
                        <img src={`http://localhost:3002/profile/${post.userPicturePath}`}  className="profileAvatar" />
                        <div className="avatarInfo">
                        <div className="nameBtn secondNameFollowHolder ">
                            <a href="#" className="text-dark">{post.name}</a>
                            <span className="followHolder">
                                {post.name !== user.user.name && <button onClick={() => followHandler(user.user._id)} className="btn btn-primary btn-sm"><i className="fa fa-plus" aria-hidden="true"></i> Follow</button>}
                            </span>
                        </div>
                        <small>{post.occupation}</small>
                        <small>{moment(post.createdAt).subtract(1, "days").fromNow()} <i className="fa fa-globe" aria-hidden="true"></i></small>
                        </div>
                        </div>
                        <p className="Post">
                            {post.message.slice(0, 100)} <a href="#" className="text-dark ml-2">...see more</a>
                        </p>
                        <a href="#" className="text-dark">
                            <img className="card-img-top" src={`http://localhost:3002/assets/${post.picturePath}`} alt={post.id}/>
                        </a>
                        <div className="card-body">
                        <div className=" PostReactions">
                            <small>
                                {
                                    <a href="javascript:void(0)"  data-toggle="modal" data-target="#likesModal" className="text-dark">
                                        <i className="fa fa-thumbs-up" aria-hidden="true">
                                            <span className="count">{Object.keys(post.likes).length}</span>
                                        </i>
                                    </a>
                                }
                            </small>
                            <small>
                                {
                                    <a href="javascript:void(0)"  data-toggle="modal" data-target="#likesModal" className="text-dark">
                                       comments <span className="count">{
                                            Object.keys(post.comments).length
                                    }</span>
                                    </a>
                                }
                            </small>
                        </div>
                        </div>
                        <div className="card-footer">
                        <button onClick={()=>likePostHanlder(post._id)} className="btn btn-default"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</button>
                        <a href="#" className="btn btn-default"><i className="fa fa-comment-o" aria-hidden="true"></i> Comment</a>
                        <a href="#" className="btn btn-default"><i className="fa fa-refresh" aria-hidden="true"></i> Repost</a>
                        <a href="javascript:void(0)" onClick={()=>sendPostHandler(post)} className="btn btn-default"><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Send</a>
                        </div>
                        <div className="feedContainer p-2 mt-2">
                        <img src={`http://localhost:3002/profile/${user.user.picturePath}`}  className="profileAvatar" />
                        <div className="writeComment">
                        <input type="text" className="form-control" placeholder="Write a comment..." value={comment} onChange={(e)=>setComment(e.target.value)} />
                        <button className="btn btn-default btn-sm commentIcon" onClick={()=>sendCommentHandler(post._id)}><i className="fa fa-smile-o" aria-hidden="true"></i></button>
                        <button className="btn btn-default btn-sm commentIcon"><i className="fa fa-picture-o" aria-hidden="true"></i></button>
                        </div>
                        </div>
                    </div>
                ))
            }

            <div className="modal fade bd-example-modal-lg"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create a post</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                <div className="feedContainer">
                    <img src={`http://localhost:3002/profile/${user.user.picturePath}`}  className="profileAvatar" />
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i className="fa fa-street-view" aria-hidden="true"></i> {user.user.name} <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i className="fa fa-globe" aria-hidden="true"></i> Anyone <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                </div>
                    <textarea type="text"  className=" mt-2 textAreaBorder" placeholder="What's on your mind?" value={message} onChange={(e)=>setMessage(e.target.value)} />

                    <div >{files}</div>

                    <div className="d-flex align-items-center hashtag">
                        <button className="btn btn-default btn-sm commentIcon"><i className="fa fa-smile-o" aria-hidden="true"></i> </button>
                        <a href="#" className="ml-2 btn btn-primary btn-sm"> Add hashtag</a>
                    </div>
                </div>
                <div className="modal-footer postActions">
                    <div className="btn btn-default d-flex align-items-center">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <button type="button" className="btn btn-default"><i className="fa fa-picture-o" aria-hidden="true"></i></button>
                        </div>
                        <button type="button" className="btn btn-default " ><i className="fa fa-video-camera" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-default" ><i className="fa fa-file-text" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-default" ><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-default divider" >|</button>
                        <button type="button" className="btn btn-default" ><i className="fa fa-commenting-o" aria-hidden="true"></i> Anyone</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-default" ><i className="fa fa-clock-o" aria-hidden="true"></i></button>
                        <button type="button" disabled={!message }  className="btn btn-default  postBtn" onClick={postHandler}>Post</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

            <div className="modal fade" id="likesModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Reactions</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                           Likes Model
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;