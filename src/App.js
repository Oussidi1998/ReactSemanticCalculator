import React, { Component } from 'react';
import { Card,Grid,Form } from 'semantic-ui-react'
import './App.css';

class Interface extends Component {

    state = {
        expression:'',
    }
    
    buttonPressed = (e) =>{
        switch(e.target.name){
            case 'number':if(this.state.expression === "0"){
                                this.setState({
                                    expression:e.target.value
                                });
                            }else{
                                this.setState({
                                    expression:this.state.expression+e.target.value
                                });
                            }break;
            case 'operation':if(this.state.expression !== ""){
                                if(typeof(this.state.expression) === 'number'){
                                    this.setState({
                                        expression:this.state.expression+e.target.value
                                    });
                                }else{
                                    let lastChar = this.state.expression.charAt(this.state.expression.length - 1);
                                if(lastChar !== "+" && lastChar !== "-" && lastChar !== "/" && lastChar !== "*"){
                                    this.setState({
                                        expression:this.state.expression+e.target.value
                                    });
                                }
                                }
                            }else{
                                this.setState({
                                    expression:'syntax error'
                                });
                            }break;
            
            case 'delete': this.setState({
                expression:'',
            });break;

            case 'egal': if(this.state.expression !== ""){
                            let lastChar = this.state.expression.charAt(this.state.expression.length - 1);
                            if(lastChar !== "+" && lastChar !== "-" && lastChar !== "/" && lastChar !== "*"){
                                this.setState({
                                    expression:eval(this.state.expression)
                                });
                            }
                        }break;
            

            default: this.setState({
                expression:'there was an error'
            })

        }
    }

    render() {
        return (
            <div className='interface'>
                <Grid centered columns={4}>
                <Grid.Column>
                    <Card>
                        <Card.Content header='React Semantic UI Calculator' />
                        <Card.Content extra>
                            <Form>
                                <Form.Input fluid placeholder='' value={this.state.expression} readOnly />
                            </Form><br/>
                            <div className='btnGroup'>
                                <button name='number' value='7' onClick={this.buttonPressed} >7</button>
                                <button name='number' value='8' onClick={this.buttonPressed} >8</button>
                                <button name='number' value='9' onClick={this.buttonPressed} >9</button>
                                <button name='operation' value='+' onClick={this.buttonPressed} >+</button>
                            </div>
                            <div className='btnGroup'>
                                <button name='number' value='4' onClick={this.buttonPressed} >4</button>
                                <button name='number' value='5' onClick={this.buttonPressed} >5</button>
                                <button name='number' value='6' onClick={this.buttonPressed} >6</button>
                                <button name='operation' value='-' onClick={this.buttonPressed} >-</button>
                            </div>
                            <div className="btnGroup">
                                <button name='number' value='1' onClick={this.buttonPressed} >1</button>
                                <button name='number' value='2' onClick={this.buttonPressed} >2</button>
                                <button name='number' value='3' onClick={this.buttonPressed} >3</button>
                                <button name='operation' value='*' onClick={this.buttonPressed} >*</button>
                            </div>
                            <div className="btnGroup">
                                <button name='delete' value='C' onClick={this.buttonPressed} >C</button>
                                <button name='number' value='0' onClick={this.buttonPressed} >0</button>
                                <button name='egal' value='=' onClick={this.buttonPressed} >=</button>
                                <button name='operation' value='/' onClick={this.buttonPressed} >/</button>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}

export default Interface;
