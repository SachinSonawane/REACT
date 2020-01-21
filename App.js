import React, { Component } from 'react';
class App extends Component{
   setName(firstName, lastName) {
      return firstName+' '+lastName;
   }

   render(){
      return(
         <div>
            <h1>Hello {this.setName('sachin', 'sonawane')}</h1>
         </div>
      );
   }
}
export default App;