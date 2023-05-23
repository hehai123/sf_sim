import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export default function Simdata2() {
  const data = [
    { star: "10 > 11", pass: 12426, failed: 0, boom: 0, total: 12426 },
    { star: "11 > 12", pass: 21238, failed: 23696, boom: 0, total: 44934 },
    { star: "12 > 13", pass: 22976, failed: 31517, boom: 294, total: 54787 },
    { star: "13 > 14", pass: 14298, failed: 23688, boom: 481, total: 38467 },
    { star: "14 > 15", pass: 4508, failed: 9584, boom: 206, total: 14298 },
    { star: "15 > 16", pass: 37177, failed: 0, boom: 0, total: 37177 },
    { star: "16 > 17", pass: 21058, failed: 44632, boom: 1350, total: 67040 },
    { star: "17 > 18", pass: 11389, failed: 23820, boom: 701, total: 35910 },
    { star: "18 > 19", pass: 5457, failed: 11229, boom: 483, total: 17169 },
    { star: "19 > 20", pass: 1797, failed: 3484, boom: 176, total: 5457 },
    { star: "20 > 21", pass: 4045, failed: 7892, boom: 864, total: 12801 },
    { star: "21 > 22", pass: 2326, failed: 4242, boom: 463, total: 7031 },
    { star: "22 > 23", pass: 72, failed: 1903, boom: 452, total: 2427 },
    { star: "23 > 24", pass: 3, failed: 54, boom: 16, total: 73 },
    { star: "24 > 25", pass: 0, failed: 1, boom: 2, total: 3 },
  ];

  const totalStats = {
    star: "Total",
    pass: 158770,
    failed: 185742,
    boom: 5488,
    total: 350000,
  };

  return (
    <>
      <Container>
        <Card
          className="w-100 mx-auto mt-3"
          style={{ maxWidth: "400px" }}
          border="primary"
        >
          <Card.Body>
            <Card.Text>
              <u>
                <b>Star force results with:</b>
              </u>
            </Card.Text>
            <ul>
              <li>
                <Card.Text>Star Catcher</Card.Text>
              </li>
              <li>
                <Card.Text>5/10/15 100%</Card.Text>
              </li>
            </ul>
          </Card.Body>
        </Card>

        <Table striped bordered hover className="mt-3" responsive>
          <thead>
            <tr>
              <th>Star</th>
              <th>Pass</th>
              <th>Pass %</th>
              <th>Fail</th>
              <th>Fail %</th>
              <th>Boom</th>
              <th>Boom %</th>
              <th>Total Attempts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalStats.star}</td>
              <td>{totalStats.pass.toLocaleString()}</td>
              <td>{((totalStats.pass / totalStats.total) * 100).toFixed(2)}</td>
              <td>{totalStats.failed.toLocaleString()}</td>
              <td>
                {((totalStats.failed / totalStats.total) * 100).toFixed(2)}
              </td>
              <td>{totalStats.boom.toLocaleString()}</td>
              <td>{((totalStats.boom / totalStats.total) * 100).toFixed(2)}</td>
              <td>{totalStats.total.toLocaleString()}</td>
            </tr>
            {data.map((data, id) => (
              <tr key={id}>
                <td>{data.star}</td>
                <td>{data.pass.toLocaleString()}</td>
                <td>{((data.pass / data.total) * 100).toFixed(2)}</td>
                <td>{data.failed.toLocaleString()}</td>
                <td>{((data.failed / data.total) * 100).toFixed(2)}</td>
                <td>{data.boom.toLocaleString()}</td>
                <td>{((data.boom / data.total) * 100).toFixed(2)}</td>
                <td>{data.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
