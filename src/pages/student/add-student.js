import { useState } from "react";
import { Input, Row, Col, Button, Card } from "antd";
import {useAddStudentMutation } from '../../services/studentApi'
const AddStudent = ({ history }) => {
  const [addStudent, { isLoading, isSuccess }] = useAddStudentMutation();

  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit =async (e) => {
    e.preventDefault();
    await addStudent(data)
    //console.log(data);

    // after submit data
    setData({
      fullName: "",
      phone: "",
      email: "",
    });

    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card title="Create a new student">
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student Full Name"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              disabled={isLoading}
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student Phone Number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              disabled={isLoading}
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student E-mail address"
              name="email"
              value={data.email}
              onChange={handleChange}
              disabled={isLoading}
            />
          </Col>
          <Col span={24}>
            <Button disabled={isLoading} htmlType="submit" type="primary">
              Add Student
            </Button>
          </Col>
        </Row>
      </Card>
    </form>
  );
};

export default AddStudent;
