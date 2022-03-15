import './sass/style.css';



class MyList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div>
      <h1>{this.props.header}</h1>
      <ol>
          <li>{this.props.titleone}</li>
          <li>{this.props.titletwo}</li>
          <li>{this.props.titlethree}</li>
      </ol>
    </div>
    )
  }
}


class App extends Component{
  render(){
    return(
      <div className='con-flex'>
        <MyList 
        header="Dress" 
        titleone="T-Short" 
        titletwo="Trousers"
        titlethree="Jeans"
        />
  <MyList 
        header="Parfumery" 
        titleone="Gucci" 
        titletwo="Sospira"
        titlethree="Lamcome"
        />

      </div>
    )
  }
}
