import React from 'react';
import logo from './logo.svg';
import './App.css';

class App  extends React.Component {
  constructor(props){
    super();
    this.state = {
      ram: 1,
      storage: 50,
      disk_type: "hdd"
    }
  }

  componentDidMount(){
    this.CalculatePrice();
  }

  UpdateRam(e){
    this.setState({
      ram: parseInt(e.target.value)
    }, () => this.CalculatePrice());
  }

  UpdateStorage(e){
    this.setState({
      storage: parseInt(e.target.value)
    }, () => this.CalculatePrice());
  }

  UpdateDiskType(e){
    alert(e.target.value);
    this.setState({
      disk_type: parseInt(e.target.value)
    }, () => this.CalculatePrice());
  }

  CalculatePrice(){
    if (this.state.disk_type === "hdd") {
      this.setState({
        rent_cost: 60*this.state.ram + 0.5*this.state.storage
      })
    } else {
      this.setState({
        rent_cost: 60*this.state.ram + 2*this.state.storage
      })
    }
  }



  render(){
    return (
      <>
      <h1>Don't but a PC, rent it..</h1>
      <h3>Choose your plan</h3>

    <p>RAM</p>
    <select id="ram_select" onChange={ (e) => this.UpdateRam(e) }>
    <option value="1">1 GB</option>
    <option value="2">2 GB</option>
    <option value="3">3 GB</option>
    <option value="4">4 GB</option>
    <option value="5">5 GB</option>
    <option value="6">6 GB</option>
    <option value="7">7 GB</option>
    <option value="8">8 GB</option>
    <option value="9">9 GB</option>
    <option value="10">10 GB</option>
    <option value="11">11 GB</option>
    <option value="12">12 GB</option>
    <option value="16">16 GB</option>
    </select>

    <p>Storage</p>
    <select id="storage_select" onChange={ (e) => this.UpdateStorage(e) }>
      <option value="50">50 GB</option>
      <option value="120">120 GB</option>
      <option value="360">360 GB</option>
      <option value="480">480 GB</option>
      <option value="720">720 GB</option>
      <option value="960">960 GB</option>
      <option value="1024">1 TB</option>
      <option value="1500">1.5 TB</option>
      <option value="3072">3 TB</option>
    </select>
    <br/>

    <label>Hard disk</label>
    <input type="radio" name="disk_type" value="hdd" onChange={ (e) => this.UpdateDiskType(e) } checked></input>
    <label>SSD</label>
    <input type="radio" name="disk_type" value="ssd" onChange={ (e) => this.UpdateDiskType(e) }></input>

    <br/>

    <p>* Processor will be dual, four, octa, 16 core, depending on your need (no extra charges)</p>
    <p>Free internet: 45 GB per month (Speed: 1 Gb ps) (Jio GigaFiber)</p>
    <p>Post 45 GB: 5 Rs. per GB</p>

    <p>Total Cost: <strong>{this.state.rent_cost}</strong> per month</p>
      </>
    );
  }
}

export default App;
