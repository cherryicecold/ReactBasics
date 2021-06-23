import React, { Component } from 'react';


class MemeGenerator extends Component{

    constructor(){
        super();
        this.state={
            topText:"",
            botomText:"",
            randomImg:"http://i.imgflip.com/lbij.jpg",
            allMemeImgs: []
        }
    }

    /*
    We will be using an API that provides a bunch of meme images.
    Make an API call to "https://api.imgflip.com/get_memes" and save the 
    data that comes back(`response.data.memes`)

    */

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
        
    }


    handleChange(event){
        const {name, value} = event.target;
        this.setState({ [name]: value})

    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randomNum].url
        this.setState({randomImg: randMemeImg})
    }

    render(){
        return(
        <div>
           
            <form className="memo-form" onSubmit={this.handleSubmit}>
                <input type="text" name="topText" placeholder ="Top Text" value={this.state.topText} onChange={this.handleChange}
                />
                <input type="text" name="botomText" placeholder ="Bottom Text" value={this.state.bottomText} onChange={this.handleChange}
                />
                <button>Gen</button>
            </form>
           
            <div className="meme">
                <img src ={this.state.randomImg} alt="" />
                <h2 className="top">{this.state.topText}</h2> 
                <h2 className="bottom">{this.state.botomText}</h2>
            </div>
        </div>    
        )
    }
   
}

export default MemeGenerator;