import { useState } from 'react';
import React from 'react';
import FormModel from '../components/form/form.js';
import SelectList from '../components/selectList/selectList.js';
import FooterModel from '../components/footer/footer.js';
import NavModel from '../components/nav/Navbar.js';
import '../pag css/App.css';

function App() {

  const [formValues, setFormValues] = useState({});

  const handleImputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  };
  return (
    <div>
      <div className='App'>
        <NavModel/>
      </div>


      <div className="pageContainer">
        <div className='line'>
          <div className='text'>
            <h1> Form João Valentim Dev</h1>
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          </div>


          <FormModel onSubmit={handleSubmit}>
            <div className="row name_form">
              <div className="row name_form">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="inputField" placeholder='First Name' onChange={handleImputChange} />
              </div>

              <div className="row name_form" >

                <input styles="margin-left: 25px;" type="text" className="validate" placeholder='Last Name' onChange={handleImputChange} />
              </div>
            </div>


            <div className="row name_form">
              <div className="row">
                <i className="material-icons prefix">email</i>
                <input id="icon_prefix" type="text" className="validate" placeholder='Email' onChange={handleImputChange} />
              </div>
              <div className="row name_form" >
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type='text' className='validate' placeholder='Phone' onChange={handleImputChange} />
              </div>
            </div>

            <div className="row name_form textAreaContainer">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="icon_prefix2" placeholder='Suggestion...' onChange={handleImputChange}></textarea>
            </div>

            <SelectList>
              <option>Javascript</option>
              <option>HTML</option>
              <option>Ruby</option>
              <option>C++</option>
            </SelectList>
            <div className='divBottom'>
              <button className='bottom' type="submit" name="action">Submit
                <i className="material-icons right c3">send</i>
              </button>
            </div>

          </FormModel>
        </div>
        <FooterModel />
      </div >

    </div >
  );
}

export default App;
