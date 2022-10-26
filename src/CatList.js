import React from 'react';

class CatList extends React.Component {
  render () {
    return <div>
      {this.props.catPics.map((image) => <img key={image.id} src={image.url} Title="This is a cat"/>)}
    </div>
  }
}

export default CatList;