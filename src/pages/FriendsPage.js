import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Box from "../components/Box";

import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import orderBy from 'lodash/orderBy';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import Table from "../components/Table";

const invertDirection = {
    asc: "desc",
    desc: "asc"
  };

  class FriendsPage extends Component {

    state = {
      data: [
        {
          firstName: "Gerrie",
          lastName: "Rulton",
          username: "grulton9",
          email: "grulton9@reverbnation.com",
          passsword: "tcwp6oONe"
        }
      ],
      editIdx: -1,
      columnToSort: "",
      sortDirection: "desc",
      query: "",
      columnToQuery: "firstName"
    };

    handleRemove = i => {
      this.setState(state => ({
        data: state.data.filter((row, j) => j !== i)
      }));
    };
  
    startEditing = i => {
      this.setState({ editIdx: i });
    };
  
    stopEditing = () => {
      this.setState({ editIdx: -1 });
    };
  
    handleSave = (i, x) => {
      this.setState(state => ({
        data: state.data.map((row, j) => (j === i ? x : row))
      }));
      this.stopEditing();
    };
  
    handleSort = columnName => {
      this.setState(state => ({
        columnToSort: columnName,
        sortDirection:
          state.columnToSort === columnName
            ? invertDirection[state.sortDirection]
            : "asc"
      }));
    };
  
    render() {
      const lowerCaseQuery = this.state.query.toLowerCase();
      return (

        <MuiThemeProvider>
          <div className="FriendsPage">
                <Button
                  display="flex"
                  alignItems="flex-start"
                  variant="contained"
                  color="primary"
                  style={{ height: 50 }}
                  >                            
                <Link to="/AddFriendsPage" style={{ color: '#FFF' }}>Add Friend</Link> 
                </Button>
                
                <Box>
                <h1>Current Friends:</h1>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", margin: "auto" }}>
                <TextField
                  id="outlined-basic"
                  label="Current Friend"
                  variant="outlined"
                  value={this.state.query}
                  onChange={e => this.setState({ query: e.target.value })}
                  floatingLabelFixed
                />

                <Select
                  style={{ marginLeft: "1em" }}
                  floatingLabelText="Select a column"
                  value={this.state.columnToQuery}
                  onChange={(event, index, value) =>
                    this.setState({ columnToQuery: value })
                  }
                >

                  <MenuItem value="firstName">First Name</MenuItem>
                  {/* <MenuItem value="lastName">Last Name</MenuItem>
                  <MenuItem value="username">Username</MenuItem>
                  <MenuItem value="email">Email</MenuItem> */}
                </Select>
              </div>
            </div>


            <Table
              handleSort={this.handleSort}
              handleRemove={this.handleRemove}
              startEditing={this.startEditing}
              editIdx={this.state.editIdx}
              stopEditing={this.stopEditing}
              handleSave={this.handleSave}
              columnToSort={this.state.columnToSort}
              sortDirection={this.state.sortDirection}
              data={orderBy(
                this.state.query
                  ? this.state.data.filter(x =>
                      x[this.state.columnToQuery]
                        .toLowerCase()
                        .includes(lowerCaseQuery)
                    )
                  : this.state.data,
                this.state.columnToSort,
                this.state.sortDirection
              )}
              header={[
                {
                  name: <b>First Name</b>,
                  prop: "firstName"
                },
                {
                  name: <b>Last Name</b>,
                  prop: "lastName"
                },
                {
                  name: <b>Email</b>,
                  prop: "email"
                }
              ]}
            />
            </Box>
          </div>
        </MuiThemeProvider>
      );
    }
  }

  export default FriendsPage;

