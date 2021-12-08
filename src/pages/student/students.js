import { Row, Col, Card, Typography, Spin,message } from "antd";
import { useHistory } from "react-router-dom";
import { useGetStudentsQuery ,useDeleteStudentMutation} from "../../services/studentApi";
import StudentItem from "./student-item";

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
          {data.map((student) => (
            <StudentItem key={student.id} student={student} />
          ))}
        </Row>
      )}
      
    </>
  );
};

export default Students;
