import React from 'react';
import IMG from './IMG'
import "./Button.css"

class Button extends React.Component {
    constructor() {
        super(); 
        this.state = { 
            showImg: false,
            isCat: false,
            isDog: false,
            textResponse: '',
            urlResponse: ''
        }

        this.handleClickClear = this.handleClickClear.bind(this);
        this.handleClickCat = this.handleClickCat.bind(this);
        this.handleClickDog = this.handleClickDog.bind(this);
    }

    handleClickClear(event) {
        this.setState({
          showImg: false,
          isCat: false,
          isDog: false,
          textResponse: '',
          urlResponse: ''
        });
    }

    handleClickCat(event) {
        //for text
        fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
            .then((res) => res.json())
            .then((body) =>{
                this.setState({
                showImg: true,
                isCat: true,
                isDog: false,
                textResponse: body.text
                })
            });
        //for img
        fetch('https://thatcopy.pw/catapi/rest/')
            .then((res) => res.json())
            .then((body) =>{
                this.setState({
                    urlResponse: body.url
                })      
            }); 
    }

    handleClickDog(event) {
        //for text
        //originally wanted to use this but got CORS errors
        //https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1
        fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1')
            .then((res) => res.json())
            .then((body) =>{
                this.setState({
                showImg: true,
                isCat: true,
                isDog: false,
                textResponse: body.text
                })
            });
        //for img
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((body) =>{
                this.setState({
                    urlResponse: body.message
                })      
            });
    }

    render(){

        const showImg = this.state.showImg;
        const isCat = this.state.isCat;
        const isDog = this.state.isDog;
        const fact = this.state.textResponse;
        const img = this.state.urlResponse;

        return(

            
            <div>
                {(showImg && isCat) && <IMG animal="Cat" text={fact} imgUrl={img}/>}
                {(showImg && isDog) && <IMG animal="Dog" text={fact} imgUrl={img}/>}
                {showImg
                    ? <button className="clearButton" onClick={ (e) => this.handleClickClear(e) }>Clear</button> 
                    : <div className="grid-container"> <button className="mainButton catButton" onClick={ (e) => this.handleClickCat(e) }>Cat</button> 
                    <button className="mainButton dogButton" onClick={ (e) => this.handleClickDog(e) }>Dog</button> </div>
                }
            </div>
        )
    }
   
}

export default Button;
