import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
  } from 'react-native';
  
  export default class App extends Component {
  constructor() {
  super();
  this.state = {
  expressionText: "",
  answerText: 0
  };
  this.TopRow = ['AC','%','DEL'];
  this.operations = ['+','-','*','/','='];
  }

  
  calculationResult() {
  const text = this.state.expressionText;
  this.setState({
  answerText: eval(text).toLocaleString()
  })
  }
  
  
  validateEquation()
  {
  const text=this.state.expressionText
  switch(text.slice(-1)){
  case '+':
  
  case '-':
  
  case '*':
  
  case '/':
  return false
  }
  return true
  }
  
  
  onButtonPress(text) {
  console.log(text);
  
  if (text == '=') {

    return this.validateEquation() && this.calculationResult(this.state.expressionText);
  }
  
  
  this.setState({
  expressionText: this.state.expressionText + text,
  });
  }
  
  operate(operation) {
  switch (operation) {
  
  case '=':
    this.validateEquation() && this.calculationResult(this.state.expressionText);
    this.setState({
      expressionText: this.state.expressionText,
      });
  break

  case '+': 
  
  case '-':
  
  case '*':
  
  case '/':
      
  
  const lastChar=this.state.expressionText.split("").pop()
  
  if(this.operations.indexOf(lastChar) >0 ) return
  
  if(this.state.text=="")return
  this.setState(
  {
  expressionText: this.state.expressionText+ operation,
  })
  }
  }

  topRowOperations(operation){
    switch(operation){
      case 'DEL':
      console.log(this.state.expressionText);
      let text = this.state.expressionText.split("");
      text.pop();
      this.setState({
      expressionText: text.join("")
      });
      break
      case 'AC':
      this.setState({expressionText: ""});
      this.setState({answerText:0});
      break
      case '%':
      this.validateEquation() && this.calculationResult(this.state.expressionText);
      this.setState({
          expressionText: this.state.expressionText,
          answerText: ((parseInt(this.state.expressionText))/100)
          });
      break
    }
  }
  
  render() {
  let rows = [];
  let rowData = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0]];
  for (let i = 0; i < 4; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
  row.push(
  <TouchableOpacity
  key={rowData[i][j]}
  style={styles.btn}
  onPress={() => this.onButtonPress(rowData[i][j])}
  >
  
  <Text style={styles.buttonText}>{rowData[i][j]}</Text>
 
  </TouchableOpacity>
  );
  }
  rows.push(<View key={i} style={styles.row}>{row}</View>);
  }
  

  let ops = [];
  for (let i = 0; i < 5; i++) {
  ops.push(
  <TouchableOpacity
  key={this.operations[i]}
  style={styles.btn}
  onPress={() => this.operate(this.operations[i])} >
  <View style = {{backgroundColor:'#272b33',width:'90%',height:'90%',borderRadius:50, justifyContent:'center',alignItems:'center',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
  <Text style={[styles.buttonText, {color:'#ffd60a'}]}>
  {this.operations[i]}
  </Text>

  </View>
  </TouchableOpacity>
  );
  }
  

  let finalTopRow = []
  for(let i = 0; i < 3; i++){
    finalTopRow.push(
    <TouchableOpacity
      key = {this.TopRow[i]}
      style={styles.btn}
      onPress={() => this.topRowOperations(this.TopRow[i])} 
      >
      <View style = {{backgroundColor:'#272b33',width:'90%',height:'90%',borderRadius:50, justifyContent:'center',alignItems:'center',shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,}}>

      <Text style={[styles.buttonText, styles.white]}>
      {this.TopRow[i]}
      </Text>
    
      </View>
      </TouchableOpacity>
      );
  }


  return (
  <View style={styles.container}>
  <View style={styles.result}>
  <Text style={styles.expressionText}>{this.state.expressionText}</Text>
  </View>
  <View style={styles.calculation}>
  <Text style={styles.answerText}>{this.state.answerText} </Text>
  
  </View>
  <View style={styles.buttons}>



  <View style={styles.numbers}>
  <View style = {{flexDirection:'row',flex:1}}>
  {finalTopRow}
  </View>
  {rows}
  </View>
  <View style={styles.operations}>{ops}</View>
  
  </View>
  </View>
  );
  }
  }
  
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  row: {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-around',
  alignItems:'stretch'
  },
  expressionText: {
  fontSize: 25,
  paddingRight:10,
  color: 'white'
  },
  buttonText: {
  fontSize: 40,
  fontWeight:'900',
  color: '#32c8e8'
  },
 
  white: {
  color: '#f9055c'
  },
  btn: {
  flex: 1,
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'center'
  },
  
  devider:{
  borderRightColor:'yellow',
  borderBottomColor:'yellow',
  borderRightWidth : 0.5,
  borderBottomWidth : 0.5 
  },
  result: {
  flex: 2,
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems:'flex-end'
  },
  calculation: {
  flex: 1,
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems:'flex-end'
  },
  answerText: {
  fontSize: 50,
  fontWeight:'900',
  paddingRight:10,
  color: '#00ffa3'
  },
  buttons: {
  flex: 4,
  flexDirection: 'row',
  
  },
  numbers: {
  flex: 3,
  padding :1,
  backgroundColor: 'black',
  },
  TopRow: {
    flex: 1,
    padding :1,
    backgroundColor: 'black',
    },
  operations: {
  flex: 1,
  justifyContent: 'space-evenly',
  backgroundColor: 'black'
  }
  });
  
  
