import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useDropzone} from 'react-dropzone'
import moment from 'moment';
import {createPost, getFeedPosts, likePost, commentPost, rePost, deletePost, deleteComment,  reset} from "../features/post/postSlice";
import {followUser} from "../features/user/userSlice";
import Spinner from './spinner'
import './sidebars/sidebars.css'
import { Toaster, toast } from 'react-hot-toast';

import storage from "../firebase.js"
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";

let HomeCard = () =>{

    const dispatch = useDispatch();
    const [message, setMessage] = useState('')
    const [comment, setComment] = useState('')
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [dropzoneKey, setDropzoneKey] = useState(0);
    const [picturePath, setPicturePath] = useState('')
    const [error, setError] = useState('')
    const [mediaType, setMediaType] = useState('')


    const { getRootProps, getInputProps } = useDropzone({
        acceptedFiles: "image/*, video/*",
        maxFiles: 1,
        onDrop: (files) => {
            setAcceptedFiles(files);
            setDropzoneKey(dropzoneKey + 1);
            const file = files[0];
            const date = new Date();
            const storageRef = ref(storage, `/posts/${file.name}`);

            // Check the file type using the MIME type (file.type property)
            const isImage = file.type.startsWith('image/');
            const isVideo = file.type.startsWith('video/');

            if (isImage || isVideo) {
                setMediaType(isImage ? 'image' : 'video');
                uploadBytes(storageRef, file).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        setPicturePath(url);
                        toast.success(`${isImage ? 'Image' : 'Video'} uploaded successfully`);
                    });
                });
            } else {
                toast.error('Invalid file type. Please upload an image or video.');
            }
        },
        maxSize: 5000000 // limit image size to 5MB
    });



    const {user} = useSelector(state => state.auth)
    const {posts,  isError, isSuccess, isLoading, message: msg} = useSelector(state => state.post)


    useEffect(()=>{
        if(isError){
            setError(msg)
        }
         dispatch(reset())
        return () => {
            dispatch(reset())
        }
    },[user,isError, msg, dispatch])

    useEffect(()=>{
        dispatch(getFeedPosts())
    },[dispatch])

    if(isLoading){
        //return <Spinner class="loader"/>
       // alert('loading')
    }

    const files = acceptedFiles.map((file) => {
        if(file.type === 'image/jpeg' || file.type === 'image/png'){
           return  <img className="card-img-top feedImage" id='file' key={file.path} src={URL.createObjectURL(file)} alt={file.name} />
        }else{
            return <video className="card-img-top feedImage" src={URL.createObjectURL(file)} autoPlay={true}  key={file.name} />
        }
    });



    let postHandler = async (e) =>{
        try {
            e.preventDefault();
            let postData = {
                message,
                picturePath,
                mediaType,
            }
            console.log(postData, 'postData')
            if(postData.message.length === 0 && postData.picturePath.length === 0){
                alert("Please enter a message or upload a picture")
                return;
            }
            await dispatch(createPost(postData)).then((res)=>{
                if(res.error){
                    toast.error(res.error)
                }else{
                    setMessage('');
                    setAcceptedFiles([]);
                    setPicturePath('')
                    setDropzoneKey(dropzoneKey + 1);
                    toast.success('Post created successfully');
                }
            })

            setMessage('');
            setAcceptedFiles([]);
        }catch (e) {
            console.log(e)
        }
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
            setComment('')
        }else{
            alert("Please enter a comment")
        }
    }
    let focusCommentInput = async (id) =>{
        document.getElementById(id + "commentInput").focus();
    }
    let deleteCommentHandler = async (postId, commentId) =>{
        let commentData = {
            postId: postId,
            commentId: commentId,
        }
        dispatch(deleteComment(commentData))
    }

    const sortedPosts = [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return(
        <div className="col-md-5 homeCard">
           <div className="card">
            <div className="card-body">
                <div className="feedContainer">
                    <img src={`https://backend-gamma-rouge.vercel.app/profile/${user && user.user.picturePath}`}  className="profileAvatar" alt="image" />
                    <div className="avatarInfo">
                        <button className="btn btn-primary btn-sm SearchBtn" data-toggle="modal" data-target=".bd-example-modal-lg">Start a post</button>
                    </div>
                </div>
            </div>
           </div>

            {
                sortedPosts.length > 0 ? (sortedPosts.map(post=>(
                    <div key={post._id} className="card mt-2 mb-2">
                        {
                            sortedPosts &&  sortedPosts.repostedBy  ?
                                <div className="reportContainer" key={post.repostedBy._id} >
                                    <div className="repostUser">
                                        <img src={`${sortedPosts.repostedBy.userPicturePath}`}  className="profileAvatarRepost" alt="image" />
                                        <small>{sortedPosts.repostedBy.name}</small>
                                    </div>
                                    {
                                        sortedPosts.repostedBy.userId === user.user.id ?
                                            <button className="btn btn-default btn-sm closePostBtn" onClick={()=> dispatch(deletePost(post._id))}><i className="fa " aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                     data-supported-dps="16x16" fill="currentColor" className="mercado-match"
                                                     width="16" height="16" focusable="false">
                                                    <path
                                                        d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                                </svg>
                                            </i>
                                            </button>
                                            : null
                                    }
                                </div>

                                : null
                        }

                        <div className="feedContainer mt-4 ml-2">
                            <img src={`${post.userPicturePath}`}  className="profileAvatarPostHome" />
                            <div className="avatarInfo">
                                <div className="nameBtn secondNameFollowHolder ">
                                    <small  className="text-dark">{post.name}</small>
                                    {/*<span className="followHolder">*/}
                                    {/*    {post.name !== user.user.name && <button onClick={() => dispatch(followUser(user.user._id))} className="btn btn-primary btn-sm"><i className="fa fa-plus" aria-hidden="true"></i> Follow</button>}*/}
                                    {/*</span>*/}
                                    <span className="ml-auto text-dark">
                                         {
                                           post &&  post.userId === user.user.id ?
                                                 <button className="btn btn-default btn-sm closePostBtn" onClick={()=> dispatch(deletePost(post._id))}><i className="fa " aria-hidden="true">
                                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                          data-supported-dps="16x16" fill="currentColor" className="mercado-match"
                                                          width="16" height="16" focusable="false">
                                                         <path
                                                             d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                                                     </svg>
                                                 </i>
                                                 </button>
                                                 : null
                                         }
                                    </span>
                                </div>
                                <small>{moment(post.createdAt).subtract(1, "days").fromNow()} <i className="fa fa-globe" aria-hidden="true"></i></small>
                            </div>
                        </div>
                        <p className="Post">
                            {post && post.message}
                        </p>

                        {post && post.picturePath && (
                            <a href="#" className="text-dark">
                                {post.picturePath.startsWith('http') ? (
                                    post.picturePath.endsWith('.mp4') ? (
                                        <video className="card-img-top" controls autoPlay src={post.picturePath}></video>
                                    ) : (
                                        <img className="card-img-top" src={post.picturePath} alt={post.id} />
                                    )
                                ) : null}
                            </a>
                        )}



                        <div className="card-body">
                            <div className=" PostReactions">
                                {
                                    post.likes  ? ( <small>
                                        {
                                            Object.keys(post.likes).length > 0 &&
                                            <a href="javascript:void(0)"  data-toggle="modal" data-target="#likesModal" className="text-dark">
                                                <i className="fa fa-thumbs-up" aria-hidden="true">
                                                    <span className="count">{Object.keys(post.likes).length}</span>
                                                </i>
                                            </a>
                                        }
                                    </small>) : (
                                        <small>
                                            No likes yet
                                        </small>
                                    )
                                }
                                {
                                    post.comments  ? (<small>
                                        {
                                            Object.keys(post.comments).length > 0 &&
                                            <a href="javascript:void(0)"  data-toggle="modal" data-target="#likesModal" className="text-dark">
                                                comments <span className="count">{
                                                Object.keys(post.comments).length
                                            }</span>
                                            </a>
                                        }
                                    </small>) : null
                                }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=> dispatch(likePost(post._id))} className="btn btn-default"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</button>
                            <a onClick={()=>focusCommentInput(post._id)} className="btn btn-default"><i className="fa fa-comment-o" aria-hidden="true"></i> Comment</a>
                            <a href="javascript:void(0)" onClick={()=>dispatch(rePost(post._id))} className="btn btn-default"><i className="fa fa-refresh" aria-hidden="true"></i> Repost</a>
                        </div>
                        <div className="feedContainer p-2 mt-2">
                            <img src={`${user.user.picturePath}`}  className="profileAvatar" />
                            <div className="writeComment">
                                <input type="text" className="form-control" id={post._id + `commentInput`} placeholder="Write a comment..." value={comment} onChange={(e)=>setComment(e.target.value)} />
                                <button className="btn btn-primary btn-sm commentIcon" disabled={!comment} onClick={()=>sendCommentHandler(post._id)}>Post</button>
                            </div>
                        </div>
                        <div className="comments">
                            {
                                post.comments  ? post.comments.map((comment) => (
                                    <div className="commentContainer" key={comment._id} >
                                        <div className="commentUser">
                                            <img src={`${comment.userPicturePath}`}  className="profileAvatar" alt="image" />
                                          <span className="commentDiv">
                                                <div className="commentAction">
                                                    <span className="text-dark font-weight-bold">{comment.name} <small>{moment(comment.date).subtract(1, "days").fromNow()}</small></span>
                                                    <span>
                                                        <button className="btn btn-default btn-small" onClick={()=>deleteCommentHandler(post._id, comment._id)}>
                                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                                 <span className="commentUserOccupation">{comment.occupation}</span>
                                                <span>{comment.comment}</span>
                                          </span>
                                        </div>
                                    </div> )) : null
                            }
                        </div>
                    </div>
                ))) : (
                    <div className="alert alert-secondary text-center noFeedsContainer mt-2" role="alert">
                        No feeds yet
                    </div>
                )
            }

            <div  className="modal fade bd-example-modal-lg"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create Post</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                <div className="feedContainer">
                    <img src={`${user && user.user.picturePath}`}  className="profileAvatar" />
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i className="fa fa-street-view" aria-hidden="true"></i> {user && user.user.name} <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i className="fa fa-globe" aria-hidden="true"></i> Anyone <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                </div>
                    <textarea type="text"  className=" mt-2 textAreaBorder" placeholder="What's on your mind?" value={message} onChange={(e)=>setMessage(e.target.value)} />

                    <div >{files}</div>

                </div>
                <div className="modal-footer postActions">
                    <div className="btn btn-default d-flex align-items-center">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <button type="button" className="btn btn-default"><i className="fa fa-picture-o" aria-hidden="true"></i></button>
                        </div>
                        <button type="button" className="btn btn-default " ><i className="fa fa-video-camera" aria-hidden="true"></i></button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-default" ><i className="fa fa-clock-o" aria-hidden="true"></i></button>
                        <button
                            disabled={
                                message === "" && files.length === 0
                            }
                            type="button"
                            className="btn btn-default  postBtn"
                            onClick={postHandler}>Post</button>
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
                           Feature Coming Soon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;