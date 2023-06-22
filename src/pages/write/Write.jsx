import "./write.css"

export default function Write() {
  return (
    <div className="write">
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
