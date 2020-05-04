import React from 'react';
import "./FormMovie.css";
import axios from "axios"

class FormEmployee extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
}

submitForm(e) {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/'
    axios.post(url, this.state)
  .then(res => res.data)
  .then(res => {
    alert(`Filme ajouté avec l'ID ${res.id} !`);
  })
  .catch(e => {
    console.error(e);
    alert(`Erreur lors de l'ajout d'un filme : ${e.message}`);
  });
  }

render() {
    return <div className="FormMovie">
    <h1>Saisie un film</h1>
  
    <form onSubmit={this.submitForm}>
      <fieldset>
        <legend>Informations</legend>
        <div className="form-data">
          <label htmlFor="title">Titre : </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </div>
  
        <div className="form-data">
          <label htmlFor="poster">poster :</label>
          <input
            type="text"
            id="poster"
            name="poster"
            onChange={this.onChange}
            value={this.state.poster}
          />
        </div>
  
        <div className="form-data">
          <label htmlFor="comment">comment : </label>
          <input
            type="text"
            id="comment"
            name="comment"
            onChange={this.onChange}
            value={this.state.email}
          />
        </div>
        <hr />
        <div className="form-data">
          <input type="submit" value="Envoyer" />
        </div>
      </fieldset>
    </form>
  </div>
  }
}



  export default FormEmployee