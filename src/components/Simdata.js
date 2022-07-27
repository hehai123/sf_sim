import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export default function Simdata() {
  const data = [
    { star: "10 > 11", pass: 4494, failed: 0, boom: 0, total: 4494 },
    { star: "11 > 12", pass: 6862, failed: 8258, boom: 0, total: 15120 },
    { star: "12 > 13", pass: 6649, failed: 10041, boom: 108, total: 16798 },
    { star: "13 > 14", pass: 3832, failed: 6937, boom: 152, total: 10921 },
    { star: "14 > 15", pass: 1137, failed: 2637, boom: 58, total: 3832 },
    { star: "15 > 16", pass: 10759, failed: 0, boom: 0, total: 10759 },
    { star: "16 > 17", pass: 5458, failed: 12794, boom: 371, total: 18623 },
    { star: "17 > 18", pass: 2799, failed: 6239, boom: 227, total: 9265 },
    { star: "18 > 19", pass: 1198, failed: 2786, boom: 120, total: 4104 },
    { star: "19 > 20", pass: 389, failed: 780, boom: 29, total: 1198 },
    { star: "20 > 21", pass: 876, failed: 1907, boom: 191, total: 2974 },
    { star: "21 > 22", pass: 435, failed: 891, boom: 105, total: 1431 },
    { star: "22 > 23", pass: 20, failed: 353, boom: 88, total: 461 },
    { star: "23 > 24", pass: 0, failed: 15, boom: 5, total: 20 },
    { star: "24 > 25", pass: 0, failed: 0, boom: 0, total: 0 },
  ];

  const totalStats = {
    star: "Total",
    pass: 44908,
    failed: 53638,
    boom: 1454,
    total: 100000,
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
                <Card.Text>5/10/15 100%</Card.Text>
              </li>
            </ul>
          </Card.Body>
        </Card>

        <Table striped bordered hover className="mt-3" size="sm">
          <thead>
            <tr>
              <th>Star</th>
              <th>Pass</th>
              <th>Pass %</th>
              <th>Fail</th>
              <th>Fail %</th>
              <th>Boom</th>
              <th>Boom %</th>
              <th>Total Atempts</th>
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
                <td>
                  {isNaN(data.pass / data.total)
                    ? "-"
                    : ((data.pass / data.total) * 100).toFixed(2)}
                </td>
                <td>{data.failed.toLocaleString()}</td>
                <td>
                  {isNaN(data.failed / data.total)
                    ? "-"
                    : ((data.failed / data.total) * 100).toFixed(2)}
                </td>
                <td>{data.boom.toLocaleString()}</td>
                <td>
                  {isNaN(data.boom / data.total)
                    ? "-"
                    : ((data.boom / data.total) * 100).toFixed(2)}
                </td>
                <td>{data.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
