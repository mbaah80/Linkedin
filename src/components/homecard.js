import React from "react";
import './sidebars/sidebars.css'

let HomeCard = () =>{
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
         <div class="card mt-2 mb-2">
            <div className="feedContainer mt-4 ml-4">
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"  className="profileAvatar" />
                    <div className="avatarInfo">
                        <small className="nameBtn"><b>Ranbir K. Toor</b> <button className="btn btn-primary btn-sm"><i class="fa fa-plus" aria-hidden="true"></i> Follow</button></small>
                        <small>Tech-Entrepreneur and Business Development Specialist</small>
                        <small>1w. <i class="fa fa-globe" aria-hidden="true"></i></small> 
                    </div>
            </div>
            <p className="Post">
            "If we reduce the number of employees for better short-term financial results, employee morale will decrease," he said. "I sincerely doubt employees who fear that they may be laid off will be able to develop software titles that could impress people around the world."
            </p>
            <img className="card-img-top" src="https://media.timeout.com/images/105938564/750/422/image.jpg" alt="Card image cap"/>
            <div class="card-body">
               <p>Reactions</p>
               <div className="feedContainer">
                    <img src="https://media.istockphoto.com/id/1201144328/photo/smiling-black-man-in-suit-posing-on-studio-background.jpg?s=612x612&w=0&k=20&c=abcU_jcFCUgSkmpXAd5qfrsUFUcdv6oOMdtW2U-m_8g="  className="profileAvatarReaction" />

                    <img src="https://media.istockphoto.com/id/1144287292/sv/foto/headshot-portr%C3%A4tt-av-lyckliga-blandade-race-afrikansk-flicka-som-b%C3%A4r-glas%C3%B6gon.jpg?s=612x612&w=0&k=20&c=IH-uSlqS8HTKja-AnkVAiHgzMKzHLxwR9seRIYFEOoo="  className="profileAvatarReaction" />

                    <img src="https://cdn-0001.qstv.on.epicgames.com/juzhOzPEHhcYONEjHm/image/screen_comp.jpeg"  className="profileAvatarReaction" />

                    <img src="http://cdn-media.backstage.com/files/media/edit/image/12611/original.jpg"  className="profileAvatarReaction" />
             </div>
            </div>
            <div class="card-footer">
                <a href="#" className="btn btn-default"> 
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatarPost" /> 
                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <a href="#" className="btn btn-default"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</a>
                <a href="#" className="btn btn-default"><i class="fa fa-comment-o" aria-hidden="true"></i> Comment</a>
                <a href="#" className="btn btn-default"><i class="fa fa-refresh" aria-hidden="true"></i> Repost</a>
                <a href="#" className="btn btn-default"><i class="fa fa-paper-plane-o" aria-hidden="true"></i> Send</a>
            </div>
            <div className="feedContainer p-2 mt-2">
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatar" />
                    <div className="writeComment">
                        <input type="text" className="form-control" placeholder="Write a comment..." />
                        <button className="btn btn-default btn-sm commentIcon"><i class="fa fa-smile-o" aria-hidden="true"></i></button>
                        <button className="btn btn-default btn-sm commentIcon"><i class="fa fa-picture-o" aria-hidden="true"></i></button>
                    </div>
             </div>
         </div>
        
        

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
                <div className="feedContainer">
                    <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/12/headshot-1.jpg"  className="profileAvatar" />
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i class="fa fa-street-view" aria-hidden="true"></i> Michael Yeboah <i class="fa fa-caret-down" aria-hidden="true"></i></button>
                    <button className="btn btn-default btn-sm modalBtn mt-1"><i class="fa fa-globe" aria-hidden="true"></i> Anyone <i class="fa fa-caret-down" aria-hidden="true"></i></button>
                </div>
                    <input type="text" className="form-control mt-2" placeholder="What's on your mind?" />
                    <div className="d-flex align-items-center hashtag">
                        <button className="btn btn-default btn-sm commentIcon"><i class="fa fa-smile-o" aria-hidden="true"></i> </button>
                        <a href="#" className="ml-2 btn btn-primary btn-sm"> Add hashtag</a>
                    </div>
                </div>
                <div class="modal-footer postActions">
                    <div>
                        <button type="button" class="btn btn-default" ><i class="fa fa-picture-o" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default" ><i class="fa fa-video-camera" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default" ><i class="fa fa-file-text" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default" ><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-default divider" >|</button>
                        <button type="button" class="btn btn-default" ><i class="fa fa-commenting-o" aria-hidden="true"></i> Anyone</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-default" ><i class="fa fa-clock-o" aria-hidden="true"></i></button>
                        <button type="button" disabled class="btn btn-default  postBtn">Post</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeCard;