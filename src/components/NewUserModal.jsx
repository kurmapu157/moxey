import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const NewUserModal = ({
  show,
  handleClose,
  handleAddUser,
  countries,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    handleAddUser(data);
    handleClose();
    reset();
  };

  return (
    <Modal show={show} onHide={handleClose} className="modal-right">
      <Modal.Header>
        <span
          className="material-symbols-outlined mt-1 me-2"
          style={{
            cursor: "pointer",
          }}
          onClick={() => handleClose()}
        >
          close
        </span>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column gap-2"
        >
          <Form.Group className="mb-3" controlId="formCountry">
            <Form.Label>
              COUNTRY <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="select"
              {...register("country", { required: true })}
              disabled={isLoading}
            >
              {isLoading ? (
                <option>Loading...</option>
              ) : (
                countries.map((country, index) => (
                  <option key={index} value={country.name}>
                    {country.name}
                  </option>
                ))
              )}
            </Form.Control>
            {errors.country && (
              <span className="text-danger">Country is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>
              SELECT ROLE <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control as="select" {...register("role", { required: true })}>
              <option value="role1">role1</option>
              <option value="role2">role2</option>
              <option value="role3">role3</option>
            </Form.Control>
            {errors.role && (
              <span className="text-danger">Role is required</span>
            )}
          </Form.Group>

          <Form.Group controlId="formSupervisor">
            <Form.Label>
              SUPERVISOR <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="select"
              {...register("supervisor", { required: true })}
            >
              <option value="sup1">sup1</option>
              <option value="sup2">sup2</option>
              <option value="sup3">sup3</option>
            </Form.Control>
            {errors.supervisor && (
              <span className="text-danger">Supervisor is required</span>
            )}
          </Form.Group>

          <div className="d-flex gap-3">
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>
                FIRST NAME <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-danger">First name is required</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>
                LAST NAME <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-danger">Last name is required</span>
              )}
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formMobileCode">
            <Form.Label>
              MOBILE NUMBER <span className="text-danger">*</span>
            </Form.Label>
            <div className="d-flex gap-3">
              <Form.Control
                as="select"
                {...register("mobileCode", { required: true })}
                style={{
                  width: "70px",
                }}
              >
                <option value="966">966</option>
                <option value="971">971</option>
                <option value="91">91</option>
              </Form.Control>
              <Form.Control
                type="text"
                {...register("mobileNumber", { required: true })}
                placeholder="Enter mobile number"
              />
            </div>
            {(errors.mobileCode || errors.mobileNumber) && (
              <span className="text-danger">Mobile code/Number is missing</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>
              EMAIL ADDRESS <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">Email is required</span>
            )}
          </Form.Group>
          <div className="d-flex gap-3">
            <Form.Group className="mb-3" controlId="formCardLoadLimit">
              <Form.Label>
                CARD LOAD LIMIT <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="number"
                {...register("paymentLimit", { required: true })}
              />
              {errors.cardLoadLimit && (
                <span className="text-danger">Card Load Limit is required</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCardLoadLimit">
              <Form.Label>
                PAYMENT LIMIT <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="number"
                {...register("paymentLimit", { required: true })}
              />
              {errors.paymentLimit && (
                <span className="text-danger">Payment Limit is required</span>
              )}
            </Form.Group>
          </div>
          <div className=" mt-3 d-flex gap-3">
            <Button variant="success" type="submit">
              + Add User
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewUserModal;
