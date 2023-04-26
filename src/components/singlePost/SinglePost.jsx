import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className ="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/2293696/pexels-photo-2293696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
            className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
            
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className ="singlePostIcon fa-solid fa-trash"></i>
            </div> 
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: <b> Ruby </b></span>
                <span className="singlePostDate"> 1 hour ago </span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime, voluptate aut, quo tenetur odio repellendus inventore in deleniti quasi vel? Autem fuga, sunt neque praesentium est deleniti aut. Natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime, voluptate aut, quo tenetur odio repellendus inventore in deleniti quasi vel? Autem fuga, sunt neque praesentium est deleniti aut. Natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime, voluptate aut, quo tenetur odio repellendus inventore in deleniti quasi vel? Autem fuga, sunt neque praesentium est deleniti aut. Natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime, voluptate aut, quo tenetur odio repellendus inventore in deleniti quasi vel? Autem fuga, sunt neque praesentium est deleniti aut. Natus.
            </p>
        </div>
      
    </div>
  )
}
