import React, { Component } from 'react'
import Queue from '../EDD/Queue'
import './queue.css'

export class Cola extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            valorcola: "",
            cola: new Queue(),
           


        }
        
        this.leerJson = this.leerJson.bind(this)
    }



    
    leerJson(event) {
        const input = event.target
        const reader = new FileReader()
        reader.onload = (event) => {
            const text = reader.result

            const json = JSON.parse(text)
            const valores = json.valores

            valores.forEach((element, index) => {
                setTimeout(() => {
                    this.setState({
                        valorcola: element,
                    }, () => {
                        this.handleSubmit()
                    })

                }, index * 1000)
            });

            this.setState({
                data: json
            })
        }
        reader.readAsText(input.files[0], "UTF-8")
    }
      
    handleChange = (e) => {
            console.log({
                name: e.target.name,
                value: e.target.value

            });

            this.setState({
                valorcola: e.target.value
            })
        };

        handleClick = (e) => {
            console.log("banda hay fe")
        };

        handleSubmit = (e) => {
            e?.preventDefault();
            console.log("Formulario Subido")
            console.log(this.state.valorcola)
            this.state.cola.enqueue(this.state.valorcola)

            this.setState({
                cola: this.state.cola
            })


        };

        salirDecola = () => {
          <div className="animate__animated animate__fadeOutRight"> {this.state.cola.dequeue()}</div>
            
            this.setState({
                cola: this.state.cola,
            })
        }
        

        render() {
            console.log(this.state.cola.length)
            return (
                   <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row gap-2">
                            <div className="col-sm-2 d-grid gap-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Elemento"
                                    placeholder="Elemento"
                                    onChange={this.handleChange}
                                    value={this.state.valorBurbuja}
                                />
                            </div>

                            <div className="col-sm-2 d-grid gap-2">
                                <button type="submit" className="btn btn-success" onClick={this.handleClick} >Agregar elemento</button>
                            </div>

                            <div className="col-sm-2 d-grid gap-2">
                                <button type="button" className="btn btn-danger" onClick={this.salirDecola} >Borrar</button>
                            </div>

                            <div className="col-sm-2 d-grid gap-2">
                            <input type="file" class="form-control" onChange={this.leerJson}/>


                            </div>
                        </div>
                    </div>
                </form>


                <div className="container">
                    <div className="card mt-4">
                        <div className="bloques_cola">
                            {
                                Array(this.state.cola.length).fill({}).map((_e, i) => (
                                    <div className="container__bloques animate__animated animate__fadeInLeft">{this.state.cola.get(i).value}</div>
                                ))

                            }

                        </div>
                    </div>
                </div>

            </div>
            )
        }


    }




export default Cola
