import React from 'react';

class IMG extends React.Component {
    render(){
        const animal = this.props.animal;

        let fact = '';
        let img_url = '';


        
        if(animal === "Cat")
        {
            fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
            .then((res) => res.json())
            .then((body) =>{
                console.log(body.text);
                fact = body.text;
                console.log(fact);
            })
            .catch((e) => console.log(e));

            /*
            fetch('https://thatcopy.pw/catapi/rest/')
            .then((res) => res.json())
            .then((body) =>{
                img_url = body.url;
            }) ; */
            
            
        }
        //if animal is dog
        else
        {
            //random dog fact
            fact = fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1')
            .then((res) => res.json()).text;
            //random dog pic
            img_url = fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json).url;
        }

        console.log(fact);
        //console.log(img_url);
        //<img src={img_url} />
        return (
            <div>
                
                <p>{fact}</p>
                <p>Hello </p>
            </div>
            
        )
    } 
}

export default IMG;