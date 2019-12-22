import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

export default class FreeDraw extends React.Component {
  words = [
    "sparkle", "a", "back", "blot", "yard", "faded", "stamp", "awake", "building", "fair", "pause", "sneeze",
    "melodic", "young", "hushed", "said", "bum", "any", "sell", "effect", "pack", "steady", "morning", "eyes",
    "advise", "to", "gifted", "grapes", "lemonade", "it's", "scattered", "duck", "brown", "to", "and", "the",
    "bum", "the", "mend", "whip", "political", "thick", "flat", "a", "simplistic", "man", "separate", "man",
    "but", "obscene", "parsimonious", "kittens", "night", "lemonade", "unique", "running", "rough", "said",
    "it's", "overwrought", "rare", "walked", "elite", "stand", "he", "the", "bum", "no", "stretch", "rule",
    "null", "standing", "tearful", "plants", "statement", "stand", "poke", "we", "cold", "fresh", "shirt",
    "destruction", "race", "quick", "ragged", "hey", "got", "just", "and", "unarmed", "marble", "up",
    "parsimonious", "brother", "strong", "volcano", "elated", "seat", "vivacious", "greet"
  ]

  state = {
    active: new Array(100).fill(false)
  }

  handleClick = index => {
    var active = this.state.active;
    active[index] = !active[index];
    this.setState({ active });
  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <Container>
          {
            [...Array(10).keys()].map(row => {
              return <Row style={{ display: "inline-block" }}>
                {
                  [...Array(10).keys()].map(col => {
                    return <Col>
                      <Pixel
                        active={ this.state.active[(row * 10) + col] }
                        onClick={() => this.handleClick((row * 10) + col)}
                      />
                    </Col>
                  })
                }
              </Row>
            })
          }
        </Container>
        <Alert variant="dark">
          {
            [...Array(10).keys()].map(col => {
              return [...Array(10).keys()].map(row => {
                if (this.state.active[(row * 10) + col]) {
                  console.log(this.words[(row * 10) + col] + " ");
                  return this.words[(row * 10) + col] + " ";
                }
                else {
                  return "";
                }
              })
            })
          }
        </Alert>
      </div>
    );
  }
}

class Pixel extends React.Component {
  props = {
    active: false,
    onClick: () => {}
  }

  render() {
    return <Button
      variant={ this.props.active ? "danger" : "secondary" }
      style={{
        width: "50px",
        height: "50px"
      }}
      onClick={this.props.onClick}
    />
  }
}
