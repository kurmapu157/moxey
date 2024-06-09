import React, { useState, useEffect } from "react";
import { Table, Button, Dropdown, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import TopHeader from "./TopHeader";
import NewUserModal from "./NewUserModal";

const fetchCountries = async () => {
  const { data } = await axios.get("https://api.first.org/data/v1/countries");
  const countriesArray = Object.values(data.data).map((country) => ({
    name: country.country,
    code: country.region,
  }));
  return countriesArray;
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCountries();
  }, []);

  const handleAddUser = (data) => {
    const newUser = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    setUsers([newUser, ...users]);
  };

  const handleRemoveUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <TopHeader countries={countries} isLoading={isLoading} />
      <Container>
        <Row>
          <Col>
            <h3>Settings</h3>
            <div className="d-flex align-items-center justify-content-between">
              <p>User List</p>
              <Button variant="success" onClick={() => setShow(true)}>
                + Add New User
              </Button>
            </div>

            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>User ID</th>
                  <th>Email Address</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>User Role</th>
                  <th>Expiry By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <span className="status">{user.status || "Active"}</span>
                    </td>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.role}</td>
                    <td>{user.expiryBy || "N/A"}</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                        >
                          Action
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => handleRemoveUser(user.id)}
                          >
                            Remove user
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <NewUserModal
          show={show}
          handleClose={() => setShow(false)}
          handleAddUser={handleAddUser}
          countries={countries}
          isLoading={isLoading}
        />
      </Container>
    </>
  );
};

export default UserTable;
