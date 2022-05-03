import React from 'react'
import BlogDetailsItem from './BlogDetailsItem'
import { connect } from 'react-redux'

const BlogDetailsPage = props => {
  return (
    <div><BlogDetailsItem {...props.deyer} /></div>
  )
}

const mapStateToProps=(state,props)=>{
    return{
        deyer: state.itema.find((a)=>{
            return a.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogDetailsPage)