import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button } from "antd";

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="400"
          footer={false}
        >
          <div style={{ display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
            <h3>Are you sure?</h3>
            <h3 style={{ marginTop: "36px" }}>Delete check-in(s)</h3>
            <div style={{width:"300px",height:"72px"}}>
              <p>
                This will permanently delete[number selected]
                check-in(s).Deleting a check-in will also revoke any merit
                automatically issued for successfully checkin into activity
              </p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
