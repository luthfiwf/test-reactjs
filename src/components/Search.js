import React, {useState} from 'react'

const Search = ({searchText}) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    searchText(text)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column justify-content-center ">
          <div className="container">
          <div className="input-group mb-2 mt-4">     
            <input type="text" className="form-control display-3 fw-bolder mb-0" id="inlineFormInputGroup" placeholder="search articles" onChange={(e) => setText(e.target.value)} />
            <div className="input-group-prepend">
              <button className="btn btn-info btn-rounded text-white">Search </button>
            </div>
          </div>
        </div>
        </div>
      </form>
      </div>

  )
}

export default Search