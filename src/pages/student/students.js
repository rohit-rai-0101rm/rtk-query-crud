import { Row, Col, Card, Typography, Spin } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useGetStudentsQuery } from "../../services/studentApi";

const { Title, Paragraph } = Typography;
const Students = () => {
  let history = useHistory();
  const { data, isFetching } = useGetStudentsQuery();
  console.log(data);
  return (
    <>
      {isFetching ? (
        <div className="spinner-wrapper">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[20, 20]}>
          {data.map(({ id, fullName, email, phone }) => (
            <Col span={6} key={id}>
              <Card
                hoverable={true}
                bordered={false}
                cover={
                  <img
                    alt="example"
                    src={`https://i.pravatar.cc/1920?img=${id}`}
                  />
                }
                actions={[
                  <EyeOutlined
                    key="view"
                    onClick={() => history.push(`/students/${id}`)}
                  />,
                  <EditOutlined
                    key="edit"
                    onClick={() => history.push("/students/edit/100")}
                  />,
                  <DeleteOutlined
                    key="setting"
                    onClick={() => alert("delete item!")}
                  />,
                ]}
              >
                <div className="student-info">
                  <Title level={5}>{fullName}</Title>
                  <Paragraph>{email}</Paragraph>
                  <Paragraph>{phone}</Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Students;
