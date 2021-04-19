import React from 'react';

class IMG extends React.Component {
    render(){
        const animal = this.props.animal;
        const fact = this.props.text;
        const imgUrl = this.props.imgUrl;
        
        return (
            <div>
                <img src={imgUrl} />
                <p>{fact}</p>
                
            </div>
            
        )
    } 
}

export default IMG;