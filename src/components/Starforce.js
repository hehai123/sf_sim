import React, { useState, useEffect } from "react";
import Navigate from "./Navigate";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTooltip } from "mdb-react-ui-kit";

export default function Starforce() {
  const [currentStar, setCurrentStar] = useState(12);
  const [successRate, setSuccessRate] = useState(50);
  const [failRate, setFailRate] = useState(50);
  const [destroyRate, setDestroyRate] = useState(0);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("success");
  const [chanceTime, setChanceTime] = useState(0);
  const [chanceMessage, setChanceMessage] = useState("");
  const [fiveTen, setFiveTen] = useState(false);
  const [starForceOff, setstarForceOff] = useState(false);
  const [starCatcher, setStarCatcher] = useState(false);
  const [starResetNumber, setStarResetNumber] = useState(12);
  const [autoReset, setAutoReset] = useState(false);
  const [equipLevel, setEquipLevel] = useState(0);
  const [mvp, setMvp] = useState("None");
  const [premiumService, setpremiumService] = useState(false);
  const [antiDestruction, setAntiDestruction] = useState(false);
  const [starForceCost, setStarForceCost] = useState(0);
  const [starForceCostDiscounted, setStarForceCostDiscounted] = useState(0);

  const [stats, setStats] = useState([
    { star: "10 > 11", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "11 > 12", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "12 > 13", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "13 > 14", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "14 > 15", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "15 > 16", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "16 > 17", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "17 > 18", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "18 > 19", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "19 > 20", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "20 > 21", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "21 > 22", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "22 > 23", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "23 > 24", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
    { star: "24 > 25", pass: 0, failed: 0, boom: 0, total: 0, cost: 0 },
  ]);

  const [totalStats, setTotalStats] = useState({
    star: "Total",
    pass: 0,
    failed: 0,
    boom: 0,
    total: 0,
    cost: 0,
  });

  const handleRandom = () => {
    const number = Math.random() * 100;
    return number;
  };

  const handleStarForceRates = (star = currentStar) => {
    var increaseRates = 1; // For star catcher rate
    var passChance = 0; // sf success rate at that star

    //Increase succes rate by 5% if using star catcher
    if (starCatcher === true) increaseRates = 1.05;

    if (chanceMessage === "Chance Time!") {
      setSuccessRate(100);
      setFailRate(0);
      setDestroyRate(0);
      return;
    }

    switch (star) {
      case 0:
        passChance = 95 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 1:
        passChance = 90 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 2:
        passChance = 85 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 3:
        passChance = 80 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 4:
        passChance = 80 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 5:
        if (fiveTen === true) {
          setSuccessRate(100);
          setFailRate(0);
          setDestroyRate(0);
        } else {
          passChance = 75 * increaseRates;
          setSuccessRate(passChance);
          setFailRate(100 - passChance);
          setDestroyRate(0);
        }
        break;
      case 6:
        passChance = 70 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 7:
        passChance = 65 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 8:
        passChance = 60 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 9:
        passChance = 55 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 10:
        if (fiveTen === true) {
          setSuccessRate(100);
          setFailRate(0);
          setDestroyRate(0);
        } else {
          passChance = 50 * increaseRates;
          setSuccessRate(passChance);
          setFailRate(100 - passChance);
          setDestroyRate(0);
        }
        break;
      case 11:
        passChance = 45 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 12:
        passChance = 40 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.99);
        setDestroyRate((100 - passChance) * 0.01);
        break;
      case 13:
        passChance = 35 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.98);
        setDestroyRate((100 - passChance) * 0.02);
        break;
      case 14:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.98);
        setDestroyRate((100 - passChance) * 0.02);
        break;
      case 15:
        if (fiveTen === true) {
          setSuccessRate(100);
          setFailRate(0);
          setDestroyRate(0);
        } else {
          passChance = 30 * increaseRates;
          setSuccessRate(passChance);
          setFailRate((100 - passChance) * 0.97);
          setDestroyRate((100 - passChance) * 0.03);
        }
        break;
      case 16:
      case 17:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.97);
        setDestroyRate((100 - passChance) * 0.03);
        break;
      case 18:
      case 19:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.96);
        setDestroyRate((100 - passChance) * 0.04);
        break;
      case 20:
      case 21:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.9);
        setDestroyRate((100 - passChance) * 0.1);
        break;
      case 22:
        passChance = 3 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.8);
        setDestroyRate((100 - passChance) * 0.2);
        break;
      case 23:
        passChance = 2 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.7);
        setDestroyRate((100 - passChance) * 0.3);
        break;
      case 24:
        passChance = 1 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.6);
        setDestroyRate((100 - passChance) * 0.4);
        break;
      case "chance":
        setSuccessRate(100);
        setFailRate(0);
        setDestroyRate(0);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleStarForceRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStar, chanceMessage, starCatcher]);

  //setting table data
  const starForceStats = (stars, outcome) => {
    const statss = [...stats];

    const cost =
      starForceCostDiscounted === 0 ? starForceCost : starForceCostDiscounted;
    statss[stars - 10].cost += cost;

    if (outcome !== "chance") {
      statss[stars - 10][outcome] += 1;
      statss[stars - 10].total += 1;

      setTotalStats({
        ...totalStats,
        [outcome]: totalStats[outcome] + 1,
        total: totalStats.total + 1,
        cost: totalStats.cost + cost,
      });
    } else {
      setTotalStats({
        ...totalStats,
        cost: totalStats.cost + cost,
      });
    }
    setStats(statss);
  };

  const handleStarForce = () => {
    const roll = handleRandom();

    if (chanceTime === 2) {
      setChanceTime(0);
      starForceStats(currentStar, "chance");
      setMessage("Chance time success!");
      setMessageColor("primary");
      setCurrentStar(currentStar + 1);
      handleStarForceRates(currentStar + 1);
      setChanceMessage("");
    } else if (roll <= destroyRate) {
      setChanceTime(0);
      starForceStats(currentStar, "boom");
      setMessage("Destroyed at " + currentStar + " stars");
      setMessageColor("danger");
      setCurrentStar(starResetNumber);
      handleStarForceRates(starResetNumber);
    } else if (roll <= failRate + destroyRate) {
      starForceStats(currentStar, "failed");
      if (currentStar === 15 || currentStar === 20 || currentStar < 11) {
        setMessage("Failed, star remains");
        setMessageColor("warning");
        setChanceTime(0);
      } else {
        if (chanceTime === 1) {
          handleStarForceRates("chance");
          setChanceMessage("Chance Time!");
        } else handleStarForceRates(currentStar - 1);
        setMessage("Failed, dropped star");
        setMessageColor("warning");
        setCurrentStar(currentStar - 1);
        setChanceTime(chanceTime + 1);
      }
    } else {
      if (autoReset === true && currentStar === 21) {
        setMessage("22 stars! Auto reseted.");
        starForceStats(currentStar, "pass");
        setCurrentStar(starResetNumber);
        handleStarForceRates(starResetNumber);
      } else {
        starForceStats(currentStar, "pass");
        setMessage("Success!");
        setCurrentStar(currentStar + 1);
        handleStarForceRates(currentStar + 1);
      }
      setChanceTime(0);
      setMessageColor("success");
    }
  };

  const handleResetButton = () => {
    setCurrentStar(starResetNumber);
    setChanceTime(0);
    setChanceMessage("");
  };

  const handleFiveTen = (checked) => {
    console.log(mvp);
    if (checked === true) {
      setFiveTen(true);
      switch (currentStar) {
        case 5:
        case 10:
        case 15:
          setSuccessRate(100);
          setFailRate(0);
          setDestroyRate(0);
          break;
        default:
          break;
      }
    } else {
      setFiveTen(false);
      switch (currentStar) {
        case 5:
          if (starCatcher === true) {
            setSuccessRate(75 * 1.05);
            setFailRate(100 - 75 * 1.05);
            setDestroyRate(0);
          } else {
            setSuccessRate(75);
            setFailRate(25);
            setDestroyRate(0);
          }
          break;
        case 10:
          if (starCatcher === true) {
            setSuccessRate(50 * 1.05);
            setFailRate(100 - 50 * 1.05);
            setDestroyRate(0);
          } else {
            setSuccessRate(50);
            setFailRate(50);
            setDestroyRate(0);
          }
          break;
        case 15:
          if (starCatcher === true) {
            setSuccessRate(30 * 1.05);
            setFailRate((100 - 30 * 1.05) * 0.97);
            setDestroyRate((100 - 30 * 1.05) * 0.03);
          } else {
            setSuccessRate(30);
            setFailRate(67.9);
            setDestroyRate(2.1);
          }
          break;
        default:
          break;
      }
    }
  };

  const handleStarCatcher = (checked) => {
    var increaseRates = 1;
    var passChance = 0;

    if (checked === true) {
      setStarCatcher(true);
      increaseRates = 1.05;
    } else {
      setStarCatcher(false);
      increaseRates = 1;
    }

    switch (currentStar) {
      case 0:
        passChance = 95 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 1:
        passChance = 90 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 2:
        passChance = 85 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 3:
        passChance = 80 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 4:
        passChance = 80 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 5:
        if (fiveTen === true) {
          setSuccessRate(100);
          setFailRate(0);
          setDestroyRate(0);
        } else {
          passChance = 75 * increaseRates;
          setSuccessRate(passChance);
          setFailRate(100 - passChance);
          setDestroyRate(0);
        }
        break;
      case 6:
        passChance = 70 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 7:
        passChance = 65 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 8:
        passChance = 60 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 9:
        passChance = 55 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 10:
        if (fiveTen === true) {
          setSuccessRate(100);
          setFailRate(0);
          setDestroyRate(0);
        } else {
          passChance = 50 * increaseRates;
          setSuccessRate(passChance);
          setFailRate(100 - passChance);
          setDestroyRate(0);
        }
        break;
      case 11:
        passChance = 45 * increaseRates;
        setSuccessRate(passChance);
        setFailRate(100 - passChance);
        setDestroyRate(0);
        break;
      case 12:
        passChance = 40 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.99);
        setDestroyRate((100 - passChance) * 0.01);
        break;
      case 13:
        passChance = 35 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.98);
        setDestroyRate((100 - passChance) * 0.02);
        break;
      case 14:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.98);
        setDestroyRate((100 - passChance) * 0.02);
        break;
      case 15:
        if (fiveTen === true) {
          setSuccessRate(100);
          setFailRate(0);
          setDestroyRate(0);
        } else {
          passChance = 30 * increaseRates;
          setSuccessRate(passChance);
          setFailRate((100 - passChance) * 0.97);
          setDestroyRate((100 - passChance) * 0.03);
        }
        break;
      case 16:
      case 17:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.97);
        setDestroyRate((100 - passChance) * 0.03);
        break;
      case 18:
      case 19:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.96);
        setDestroyRate((100 - passChance) * 0.04);
        break;
      case 20:
      case 21:
        passChance = 30 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.9);
        setDestroyRate((100 - passChance) * 0.1);
        break;
      case 22:
        passChance = 3 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.8);
        setDestroyRate((100 - passChance) * 0.2);
        break;
      case 23:
        passChance = 3 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.7);
        setDestroyRate((100 - passChance) * 0.3);
        break;
      case 24:
        passChance = 3 * increaseRates;
        setSuccessRate(passChance);
        setFailRate((100 - passChance) * 0.6);
        setDestroyRate((100 - passChance) * 0.4);
        break;
      case "chance":
        setSuccessRate(100);
        setFailRate(0);
        setDestroyRate(0);
        break;
      default:
        break;
    }
  };

  const handlestarForceCost = () => {
    var costBefore = 0;
    var costAfter = 0;
    var multiplier = 1; // for 30% off star force
    var multiplier2 = 1; // for mvp and psc
    var addMultiplier = 0; // for anti destruction

    if (starForceOff) {
      multiplier = 0.7;
    } else multiplier = 1;

    switch (mvp) {
      case "None":
        if (premiumService) multiplier2 = 0.95;
        else multiplier2 = 1;
        break;
      case "Silver":
        if (premiumService) multiplier2 = 0.92;
        else multiplier2 = 0.97;
        break;
      case "Gold":
        if (premiumService) multiplier2 = 0.9;
        else multiplier2 = 0.95;
        break;
      case "Diamond":
        if (premiumService) multiplier2 = 0.85;
        else multiplier2 = 0.9;
        break;
      default:
        break;
    }

    //check later
    if (antiDestruction && chanceTime !== 2) {
      addMultiplier = 1;
    } else addMultiplier = 0;

    switch (currentStar) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        costBefore =
          100 *
          Math.round((Math.pow(equipLevel, 3) * (currentStar + 1)) / 2500 + 10);
        costAfter = costBefore * (multiplier * multiplier2);
        break;
      case 10:
      case 11:
        costBefore =
          100 *
          Math.round(
            (Math.pow(equipLevel, 3) * Math.pow(currentStar + 1, 2.7)) / 40000 +
              10
          );
        costAfter = costBefore * (multiplier * multiplier2);
        break;
      case 12:
      case 13:
      case 14:
        costBefore =
          100 *
          Math.round(
            (Math.pow(equipLevel, 3) * Math.pow(currentStar + 1, 2.7)) / 40000 +
              10
          ) *
          (1 + addMultiplier);
        costAfter =
          (costBefore * (multiplier * multiplier2 + addMultiplier)) /
          (1 + addMultiplier);
        break;
      case 15:
        if (fiveTen) {
          costBefore =
            100 *
            Math.round(
              (Math.pow(equipLevel, 3) * Math.pow(currentStar + 1, 2.7)) /
                20000 +
                10
            );
          costAfter = costBefore * (multiplier * multiplier2);
        } else {
          costBefore =
            100 *
            Math.round(
              (Math.pow(equipLevel, 3) * Math.pow(currentStar + 1, 2.7)) /
                20000 +
                10
            ) *
            (1 + addMultiplier);
          costAfter =
            (costBefore * (multiplier * multiplier2 + addMultiplier)) /
            (1 + addMultiplier);
        }
        break;
      case 16:
        costBefore =
          100 *
          Math.round(
            (Math.pow(equipLevel, 3) * Math.pow(currentStar + 1, 2.7)) / 20000 +
              10
          ) *
          (1 + addMultiplier);
        costAfter =
          (costBefore * (multiplier * multiplier2 + addMultiplier)) /
          (1 + addMultiplier);
        break;
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
        costBefore =
          100 *
          Math.round(
            (Math.pow(equipLevel, 3) * Math.pow(currentStar + 1, 2.7)) / 20000 +
              10
          );
        costAfter = costBefore * multiplier;
        break;
      default:
        break;
    }

    //starforce cost meso display message
    if (costBefore === costAfter) {
      setStarForceCostDiscounted(0);
    } else {
      setStarForceCostDiscounted(costAfter);
    }
    setStarForceCost(costBefore);
  };

  const safeParseInt = (value) => {
    const num = parseInt(value);
    return isNaN(num) ? 0 : num;
  };

  useEffect(() => {
    handlestarForceCost();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    equipLevel,
    currentStar,
    mvp,
    starForceOff,
    antiDestruction,
    premiumService,
    fiveTen,
  ]);

  return (
    <>
      <Navigate />
      <Container
        className="fluid align-items-center justify-content-center mt-4"
        fluid="md"
      >
        <Card className="w-100 mx-auto mb-3" style={{ maxWidth: "800px" }}>
          <Card.Body>
            <Card.Text>
              Select the options you want and click starforce.
            </Card.Text>
            <Card.Text>
              Starforce{" "}
              <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#" }}
                title="To avoid distorting results %"
              >
                attemps
              </MDBTooltip>{" "}
              with chance time will not be included. However, the cost will
              still be added.
            </Card.Text>
          </Card.Body>
        </Card>
        <Row xs={1} md={2} className="justify-content-md-center">
          <Col>
            <Card
              className="w-100 mx-auto"
              style={{ maxWidth: "400px" }}
              border="primary"
            >
              <Card.Header className="text-center">Settings</Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="Star catcher"
                        id="star-catcher"
                        onChange={(event) =>
                          handleStarCatcher(event.target.checked)
                        }
                      />
                      <Form.Check
                        type="checkbox"
                        label="5/10/15 100%"
                        id="five-ten"
                        onChange={(event) =>
                          handleFiveTen(event.target.checked)
                        }
                      />
                      <Form.Check
                        type="checkbox"
                        label="30% off cost"
                        id="30 off"
                        onChange={(event) =>
                          setstarForceOff(event.target.checked)
                        }
                      />
                      <Form.Check
                        type="checkbox"
                        label="Anti-destruction"
                        id="anti-destruction"
                        onChange={(event) =>
                          setAntiDestruction(event.target.checked)
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="Premium service coupon"
                        id="premium service coupon"
                        onChange={(event) =>
                          setpremiumService(event.target.checked)
                        }
                      />
                      <Form.Check
                        type="checkbox"
                        id="reset"
                        label={`Auto reset after reaching 22 stars`}
                        onChange={(event) => setAutoReset(event.target.checked)}
                      />
                    </Col>
                  </Row>

                  <Form.Select
                    //size="sm"
                    onChange={(event) => setMvp(event.target.value)}
                  >
                    <option disabled>Select Mvp</option>
                    <option value="None">None / Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Diamond">Diamond and above</option>
                  </Form.Select>
                  <MDBInput
                    className="mt-3"
                    label="Equipment level"
                    id="form1"
                    type="number"
                    min="0"
                    onChange={(event) =>
                      setEquipLevel(
                        Math.floor(safeParseInt(event.target.value) / 10) * 10
                      )
                    }
                    //size="sm"
                  />
                  <MDBInput
                    className="mt-3"
                    label="Starting / Reset star"
                    id="form2"
                    type="number"
                    min="10"
                    max="24"
                    onChange={(event) =>
                      setStarResetNumber(safeParseInt(event.target.value))
                    }
                    defaultValue="12"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="w-100 mx-auto mt-2 mt-md-0"
              style={{ maxWidth: "400px" }}
              border="primary"
            >
              <Card.Header className="text-center">Star Force</Card.Header>
              <Row className="ps-3 mt-2">
                <Card.Text>
                  {currentStar} &gt; {currentStar + 1} &nbsp; {chanceMessage}
                  <br />
                  Success rate: &nbsp; {successRate.toFixed(2)}% <br />
                  Fail rate: &nbsp; {failRate.toFixed(2)}% <br />
                  Boom rate: &nbsp; {destroyRate.toFixed(2)}%
                </Card.Text>
                <Card.Text className="text-center">
                  Meso cost <br />
                  {starForceCostDiscounted === 0 ? (
                    starForceCost.toLocaleString()
                  ) : (
                    <del>{starForceCost.toLocaleString()}</del>
                  )}
                  &ensp;
                  {starForceCostDiscounted === 0
                    ? ""
                    : starForceCostDiscounted.toLocaleString()}
                </Card.Text>
              </Row>
              <Row className="mt-2 mb-2 ms-5">
                <Col>
                  <Button onClick={handleStarForce}>Star force</Button>
                </Col>
                <Col>
                  <Button variant="secondary" onClick={handleResetButton}>
                    Reset star
                  </Button>
                </Col>
              </Row>
            </Card>
            {message && (
              <Alert
                className="w-100 mx-auto mt-2 text-center p-1"
                style={{ maxWidth: "400px" }}
                variant={messageColor}
              >
                {message}
              </Alert>
            )}
          </Col>
        </Row>
        <Table striped bordered hover className="mt-3 text-center" responsive>
          <thead>
            <tr>
              <th>Star</th>
              <th>Pass</th>
              <th>Pass %</th>
              <th>Fail</th>
              <th>Fail %</th>
              <th>Boom</th>
              <th>Boom %</th>
              <th>Attempts</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalStats.star}</td>
              <td>{totalStats.pass.toLocaleString()}</td>
              <td>
                {isNaN(totalStats.pass / totalStats.total)
                  ? "-"
                  : ((totalStats.pass / totalStats.total) * 100).toFixed(2)}
              </td>
              <td>{totalStats.failed.toLocaleString()}</td>
              <td>
                {isNaN(totalStats.failed / totalStats.total)
                  ? "-"
                  : ((totalStats.pass / totalStats.total) * 100).toFixed(2)}
              </td>
              <td>{totalStats.boom.toLocaleString()}</td>
              <td>
                {isNaN(totalStats.boom / totalStats.total)
                  ? "-"
                  : ((totalStats.pass / totalStats.total) * 100).toFixed(2)}
              </td>
              <td>{totalStats.total.toLocaleString()}</td>
              <td>{totalStats.cost.toLocaleString()}</td>
            </tr>
            {stats.map((stats, id) => (
              <tr key={id}>
                <td>{stats.star}</td>
                <td>{stats.pass.toLocaleString()}</td>
                <td>
                  {isNaN(stats.pass / stats.total)
                    ? "-"
                    : ((stats.pass / stats.total) * 100).toFixed(2)}
                </td>
                <td>{stats.failed.toLocaleString()}</td>
                <td>
                  {isNaN(stats.failed / stats.total)
                    ? "-"
                    : ((stats.failed / stats.total) * 100).toFixed(2)}
                </td>
                <td>{stats.boom.toLocaleString()}</td>
                <td>
                  {isNaN(stats.boom / stats.total)
                    ? "-"
                    : ((stats.boom / stats.total) * 100).toFixed(2)}
                </td>
                <td>{stats.total.toLocaleString()}</td>
                <td>{stats.cost.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
