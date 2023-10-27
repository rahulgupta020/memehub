import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import { Modal } from 'react-bootstrap';

class Meme extends Component {
    state = {
        apiData: [],
        imgmodal: '',
        show: false,
        search: "",
        inputBool: false,
    };

    componentDidMount() {
        axios.get(`https://api.imgflip.com/get_memes`).then(res => {
            this.setState({ apiData: res.data.data.memes });
        });
    }

    handleChange = event => {
        this.setState({ search: event.target.value, inputBool: true });
    };

    handelModal = index1 => {
        const { show } = this.state;
        this.state.apiData.map((item, index) => {
            if (index === index1) {
                this.setState({ imgmodal: item.url });
            }
        });
        this.setState({ show: !show });
    };

    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.heading}>Meme Fetch From API and Print on the Screen</h1>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for memes"
                    onChange={this.handleChange}
                    style={styles.input}
                />
                <Table style={styles.table}>
                    <thead style={styles.tableHeader}>
                        <tr>
                            <th style={styles.headerCell}>ID</th>
                            <th style={styles.headerCell}>Name</th>
                            <th style={styles.headerCell}>Image</th>
                        </tr>
                    </thead>
                    {this.state.inputBool && (
                        <tbody>
                            {this.state.apiData.map((item, index1) => {
                                const { search } = this.state;
                                if (
                                    item.name.toLowerCase().indexOf(search) > -1 ||
                                    item.name.toUpperCase().indexOf(search) > -1 ||
                                    item.name.toString().indexOf(search) > -1
                                ) {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <img
                                                    onClick={() => this.handelModal(index1)}
                                                    src={item.url}
                                                    width="50"
                                                    height="50"
                                                    alt={item.name}
                                                    style={styles.image}
                                                />
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </tbody>
                    )}
                </Table>
                <Modal show={this.state.show}>
                    <Modal.Body>
                        <img src={this.state.imgmodal} width="450" height="500" alt="Meme" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handelModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        border: '1px solid #ccc',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        background: '#f2f2f2',
    },
    headerCell: {
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #ccc',
    },
    image: {
        cursor: 'pointer',
    },
};

export default Meme;
