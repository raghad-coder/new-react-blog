import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" 
        alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className=" writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}} />
            <input type="text"  placeholder="title"  className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story......" 
            type="text"
            className="writeInput writeText" 
            ></textarea>
        </div>
        <button className="writePublish">Publish</button>
      </form>
    </div>
  )
}
