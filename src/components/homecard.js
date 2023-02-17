import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useDropzone} from 'react-dropzone'
import {createPost, getFeedPosts, reset} from "../features/post/postSlice";
import Spinner from './spinner'
import './sidebars/sidebars.css'

let HomeCard = () =>{

    const dispatch = useDispatch();
    const [message, setMessage] = useState('')
    const [picturePath, setpicturePath] = useState('')
    const [error, setError] = useState('')

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({accept: 'image/*',});

    const {user} = useSelector(state => state.auth)
    const {posts, isError, isSuccess, isLoading, message: msg} = useSelector((state) => state.post)


    useEffect(()=>{
        if(isError){
            setError(msg)
        }
        if(isSuccess){
            setMessage(msg)
        }
        // return () => {
        //     dispatch(reset())
        // }
    },[user,isError, isSuccess, isLoading, msg, dispatch])

    useEffect(() => {
        console.log(posts, "posts")
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


    return(
        <div className="col-md-5 homeCard">
           <div class="card">
            <div class="card-body">
                <div className="feedContainer">
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatar" />
                    <div className="avatarInfo">
                        <button className="btn btn-primary btn-sm SearchBtn" data-toggle="modal" data-target=".bd-example-modal-lg">Start a post</button>
                    </div>
                </div>
                <div class="card-footer startPostFooter">
                    <a href="#" className="btn btn-default"><i class="fa fa-picture-o" aria-hidden="true"></i> Photo</a>
                    <a href="#" className="btn btn-default"><i class="fa fa-file-video-o" aria-hidden="true"></i> Video</a>
                    <a href="#" className="btn btn-default"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Event</a>
                    <a href="#" className="btn btn-default"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Write article</a>
            </div>
            </div>
           </div>
            
            {
                posts.map(post=>(
                    <div className="card mt-2 mb-2">
                <div className="feedContainer mt-4 ml-4">
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"  className="profileAvatar" />
                <div className="avatarInfo">
                <small className="nameBtn"><b>{post.name}</b> <button className="btn btn-primary btn-sm"><i className="fa fa-plus" aria-hidden="true"></i> Follow</button></small>
                <small>Tech-Entrepreneur and Business Development Specialist</small>
                <small>1w. <i className="fa fa-globe" aria-hidden="true"></i></small>
                </div>
                </div>
                <p className="Post">
                    {post.message}
                </p>
                <img className="card-img-top" src={post.picturePath} alt="Card image cap"/>
                <div className="card-body">
                <p>Reactions</p>
                <div className="feedContainer">
                <img src="https://media.istockphoto.com/id/1201144328/photo/smiling-black-man-in-suit-posing-on-studio-background.jpg?s=612x612&w=0&k=20&c=abcU_jcFCUgSkmpXAd5qfrsUFUcdv6oOMdtW2U-m_8g="  className="profileAvatarReaction" />

                <img src="https://media.istockphoto.com/id/1144287292/sv/foto/headshot-portr%C3%A4tt-av-lyckliga-blandade-race-afrikansk-flicka-som-b%C3%A4r-glas%C3%B6gon.jpg?s=612x612&w=0&k=20&c=IH-uSlqS8HTKja-AnkVAiHgzMKzHLxwR9seRIYFEOoo="  className="profileAvatarReaction" />

                <img src="https://cdn-0001.qstv.on.epicgames.com/juzhOzPEHhcYONEjHm/image/screen_comp.jpeg"  className="profileAvatarReaction" />

                <img src="http://cdn-media.backstage.com/files/media/edit/image/12611/original.jpg"  className="profileAvatarReaction" />
                </div>
                </div>
                <div className="card-footer">
                <a href="#" className="btn btn-default">
                <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatarPost" />
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <a href="#" className="btn btn-default"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</a>
                <a href="#" className="btn btn-default"><i className="fa fa-comment-o" aria-hidden="true"></i> Comment</a>
                <a href="#" className="btn btn-default"><i className="fa fa-refresh" aria-hidden="true"></i> Repost</a>
                <a href="#" className="btn btn-default"><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Send</a>
                </div>
                <div className="feedContainer p-2 mt-2">
                <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatar" />
                <div className="writeComment">
                <input type="text" className="form-control" placeholder="Write a comment..." />
                <button className="btn btn-default btn-sm commentIcon"><i className="fa fa-smile-o" aria-hidden="true"></i></button>
                <button className="btn btn-default btn-sm commentIcon"><i className="fa fa-picture-o" aria-hidden="true"></i></button>
                </div>
                </div>
                </div>
                ))
            }

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create a post</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                <div className="feedContainer">
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatar" />
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i class="fa fa-street-view" aria-hidden="true"></i> Michael Yeboah <i class="fa fa-caret-down" aria-hidden="true"></i></button>
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i class="fa fa-globe" aria-hidden="true"></i> Anyone <i class="fa fa-caret-down" aria-hidden="true"></i></button>
                </div>
                    <textarea type="text"  className=" mt-2 textAreaBorder" placeholder="What's on your mind?" value={message} onChange={(e)=>setMessage(e.target.value)} />

                    <div >{files}</div>

                    <div className="d-flex align-items-center hashtag">
                        <button className="btn btn-default btn-sm commentIcon"><i class="fa fa-smile-o" aria-hidden="true"></i> </button>
                        <a href="#" className="ml-2 btn btn-primary btn-sm"> Add hashtag</a>
                    </div>
                </div>
                <div class="modal-footer postActions">
                    <div className="btn btn-default d-flex align-items-center">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <button type="button" className="btn btn-default"><i className="fa fa-picture-o" aria-hidden="true"></i></button>
                        </div>
                        <button type="button" class="btn btn-default " ><i class="fa fa-video-camera" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default" ><i class="fa fa-file-text" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default" ><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default divider" >|</button>
                        <button type="button" class="btn btn-default" ><i class="fa fa-commenting-o" aria-hidden="true"></i> Anyone</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-default" ><i class="fa fa-clock-o" aria-hidden="true"></i></button>
                        <button type="button" disabled={!message }  class="btn btn-default  postBtn" onClick={postHandler}>Post</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeCard;