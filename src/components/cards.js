import React from "react";
import axios from "../axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const cardataData = [
  {
    "education_journal_entry": {
      "id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
      "created_by": 189,
      "data": {
        "name": "Python Research",
        "grade": 12,
        "research_title": "Research on Python AI",
        "research_pub_url": "https://www.python.org/",
        "fj_edu_entry_type": 46,
        "research_pub_notes": "Research notes on python tensor flow ai.",
        "research_pub_subject": 5,
        "research_pub_uploads": [
          "https://selftree-images.s3.amazonaws.com/uploads/file_upload/fj_file/17124/lockup.svg"
        ]
      },
      "created_at": "2020-06-23T10:57:31.356Z",
      "updated_at": "2020-06-23T11:13:25.567Z",
      "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
      "updated_by": 189,
      "record_id": 787,
      "draft": false,
      "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
      "travel_activities_count": 0,
      "activity_type": "Research, Publication",
      "activity_form_id": 282,
      "planner_list_id": null,
      "backup_data": null,
      "form_wizard_id": 17,
      "education_resource_id": null,
      "author_name": "jaibharathi1991",
      "data_source": {
        "fj_student_grade_level_at_time_of_this_update_edu": null,
        "research_pub_subject": {
          "label": "Computer Science",
          "value": 5
        }
      },
      "comments_count": 0,
      "edu_activities": [
        {
          "id": "2e291e79-aab0-463d-a4a1-0348593201a9",
          "data": {
            "name": "Gradients",
            "notes": "<p><font color=\"#202124\" face=\"Roboto, Noto Sans, Noto Sans JP, Noto Sans KR, Noto Naskh Arabic, Noto Sans Thai, Noto Sans Hebrew, Noto Sans Bengali, sans-serif\"><span style=\"font-size: 16px;\">Constructs symbolic derivatives of sum of ys w.r.t. x in xs.</span></font><br></p>",
            "reminder": "Jun 26th, 2020",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-26"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:11:51.411646",
          "updated_at": "2020-06-23T11:32:38.378039",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        },
        {
          "id": "c11a6c93-f544-431c-8a88-af719b8d0fe6",
          "data": {
            "name": "DeviceSpec",
            "notes": "<p><font color=\"#37474f\" face=\"Roboto Mono, monospace\"><span style=\"font-size: 14.4px;\">DeviceSpecs are used throughout TensorFlow to describe where state is stored and computations occur.</span></font><br></p>",
            "reminder": "Jun 24th, 2020",
            "reference_url": "https://www.tensorflow.org/api_docs/python/tf/DeviceSpec",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-24"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:10:53.590238",
          "updated_at": "2020-06-23T11:33:17.627334",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        },
        {
          "id": "6cb88dfb-d15a-43d2-a508-bd92236c84c2",
          "data": {
            "name": "AggregationMethod",
            "notes": "<p>Computing partial derivatives can require aggregating gradient contributions. This class lists the various methods that can be used to combine gradients in the graph.<br></p>",
            "reminder": "Jun 24th, 2020",
            "reference_url": "https://www.tensorflow.org/api_docs/python/",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-24"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:09:55.663626",
          "updated_at": "2020-06-23T11:40:19.407975",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        }
      ],
      "journal_events": null,
      "upcoming_activities": null,
      "check_list_count": 0
    }
  },
  {
    "education_journal_entry": {
      "id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
      "created_by": 189,
      "data": {
        "name": "Python Research",
        "grade": 12,
        "research_title": "Research on Python AI",
        "research_pub_url": "https://www.python.org/",
        "fj_edu_entry_type": 46,
        "research_pub_notes": "Research notes on python tensor flow ai.",
        "research_pub_subject": 5,
        "research_pub_uploads": [
          "https://selftree-images.s3.amazonaws.com/uploads/file_upload/fj_file/17124/lockup.svg"
        ]
      },
      "created_at": "2020-06-23T10:57:31.356Z",
      "updated_at": "2020-06-23T11:13:25.567Z",
      "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
      "updated_by": 189,
      "record_id": 787,
      "draft": false,
      "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
      "travel_activities_count": 0,
      "activity_type": "Research, Publication",
      "activity_form_id": 282,
      "planner_list_id": null,
      "backup_data": null,
      "form_wizard_id": 17,
      "education_resource_id": null,
      "author_name": "jaibharathi1991",
      "data_source": {
        "fj_student_grade_level_at_time_of_this_update_edu": null,
        "research_pub_subject": {
          "label": "Computer Science",
          "value": 5
        }
      },
      "comments_count": 0,
      "edu_activities": [
        {
          "id": "2e291e79-aab0-463d-a4a1-0348593201a9",
          "data": {
            "name": "Gradients",
            "notes": "<p><font color=\"#202124\" face=\"Roboto, Noto Sans, Noto Sans JP, Noto Sans KR, Noto Naskh Arabic, Noto Sans Thai, Noto Sans Hebrew, Noto Sans Bengali, sans-serif\"><span style=\"font-size: 16px;\">Constructs symbolic derivatives of sum of ys w.r.t. x in xs.</span></font><br></p>",
            "reminder": "Jun 26th, 2020",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-26"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:11:51.411646",
          "updated_at": "2020-06-23T11:32:38.378039",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        },
        {
          "id": "c11a6c93-f544-431c-8a88-af719b8d0fe6",
          "data": {
            "name": "DeviceSpec",
            "notes": "<p><font color=\"#37474f\" face=\"Roboto Mono, monospace\"><span style=\"font-size: 14.4px;\">DeviceSpecs are used throughout TensorFlow to describe where state is stored and computations occur.</span></font><br></p>",
            "reminder": "Jun 24th, 2020",
            "reference_url": "https://www.tensorflow.org/api_docs/python/tf/DeviceSpec",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-24"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:10:53.590238",
          "updated_at": "2020-06-23T11:33:17.627334",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        },
        {
          "id": "6cb88dfb-d15a-43d2-a508-bd92236c84c2",
          "data": {
            "name": "AggregationMethod",
            "notes": "<p>Computing partial derivatives can require aggregating gradient contributions. This class lists the various methods that can be used to combine gradients in the graph.<br></p>",
            "reminder": "Jun 24th, 2020",
            "reference_url": "https://www.tensorflow.org/api_docs/python/",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-24"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:09:55.663626",
          "updated_at": "2020-06-23T11:40:19.407975",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        }
      ],
      "journal_events": null,
      "upcoming_activities": null,
      "check_list_count": 0
    }
  },
  {
    "education_journal_entry": {
      "id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
      "created_by": 189,
      "data": {
        "name": "Python Research",
        "grade": 12,
        "research_title": "Research on Python AI",
        "research_pub_url": "https://www.python.org/",
        "fj_edu_entry_type": 46,
        "research_pub_notes": "Research notes on python tensor flow ai.",
        "research_pub_subject": 5,
        "research_pub_uploads": [
          "https://selftree-images.s3.amazonaws.com/uploads/file_upload/fj_file/17124/lockup.svg"
        ]
      },
      "created_at": "2020-06-23T10:57:31.356Z",
      "updated_at": "2020-06-23T11:13:25.567Z",
      "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
      "updated_by": 189,
      "record_id": 787,
      "draft": false,
      "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
      "travel_activities_count": 0,
      "activity_type": "Research, Publication",
      "activity_form_id": 282,
      "planner_list_id": null,
      "backup_data": null,
      "form_wizard_id": 17,
      "education_resource_id": null,
      "author_name": "jaibharathi1991",
      "data_source": {
        "fj_student_grade_level_at_time_of_this_update_edu": null,
        "research_pub_subject": {
          "label": "Computer Science",
          "value": 5
        }
      },
      "comments_count": 0,
      "edu_activities": [
        {
          "id": "2e291e79-aab0-463d-a4a1-0348593201a9",
          "data": {
            "name": "Gradients",
            "notes": "<p><font color=\"#202124\" face=\"Roboto, Noto Sans, Noto Sans JP, Noto Sans KR, Noto Naskh Arabic, Noto Sans Thai, Noto Sans Hebrew, Noto Sans Bengali, sans-serif\"><span style=\"font-size: 16px;\">Constructs symbolic derivatives of sum of ys w.r.t. x in xs.</span></font><br></p>",
            "reminder": "Jun 26th, 2020",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-26"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:11:51.411646",
          "updated_at": "2020-06-23T11:32:38.378039",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        },
        {
          "id": "c11a6c93-f544-431c-8a88-af719b8d0fe6",
          "data": {
            "name": "DeviceSpec",
            "notes": "<p><font color=\"#37474f\" face=\"Roboto Mono, monospace\"><span style=\"font-size: 14.4px;\">DeviceSpecs are used throughout TensorFlow to describe where state is stored and computations occur.</span></font><br></p>",
            "reminder": "Jun 24th, 2020",
            "reference_url": "https://www.tensorflow.org/api_docs/python/tf/DeviceSpec",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-24"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:10:53.590238",
          "updated_at": "2020-06-23T11:33:17.627334",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        },
        {
          "id": "6cb88dfb-d15a-43d2-a508-bd92236c84c2",
          "data": {
            "name": "AggregationMethod",
            "notes": "<p>Computing partial derivatives can require aggregating gradient contributions. This class lists the various methods that can be used to combine gradients in the graph.<br></p>",
            "reminder": "Jun 24th, 2020",
            "reference_url": "https://www.tensorflow.org/api_docs/python/",
            "deadline_triangle": 2,
            "completion_status_array": [],
            "reminder_formatted_date": "2020-06-24"
          },
          "education_journal_entry_id": "a6b11942-0d92-4b61-bd78-fde538fcd5f3",
          "journey_category_id": "6580ab97-127f-486c-acbd-7da89c570f8e",
          "education_journey_profile_id": "0d6b3be7-3411-4ea1-8efa-c1e4a020f288",
          "created_by": 189,
          "updated_by": 189,
          "created_at": "2020-06-23T11:09:55.663626",
          "updated_at": "2020-06-23T11:40:19.407975",
          "position": null,
          "activity_type": null,
          "activity_form_id": null,
          "planner_id": null,
          "author_name": "jaibharathi1991"
        }
      ],
      "journal_events": null,
      "upcoming_activities": null,
      "check_list_count": 0
    }
  },
];

// Start App

export default class cards extends React.Component {
  constructor() {
    super();

    this.state = {
      cardata: {},
    };
  }

  getUsersData() {
    const options = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    axios
      .get(`/a6b11942-0d92-4b61-bd78-fde538fcd5f3`, options)
      .then((res) => {
        console.log("resultapi", res);
        const data = res.data;
        console.log(data);

        this.setState({
          cardata: cardataData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      this.setState({
        cardata: cardataData,
      });
  }
  componentWillMount() {
    this.getUsersData();
  }

  render() {
    console.log("carddata", this.state);
    return (
      <div>
        <header className="app-header"></header>
        <div className="app-card-list" id="app-card-list">
          {Object.keys(this.state.cardata).map((key) => (
            <Card key={key} index={key} details={this.state.cardata[key]} />
          ))}
        </div>
      </div>
    );
  }
}

class CardHeader extends React.Component {
  render() {
    console.log("header", this.props);
    const { image, category } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">
          <Badge variant="dark">{category}</Badge>
        </h4>
      </header>
    );
  }
}

class CardBody extends React.Component {
  render() {
      console.log('eduact',this.props)
      const {edu_activities} = this.props
    return (
      <div className="card-body">
       <Link to={{pathname: '/details', query: {edu_activities}}} >
       <Button variant="info">Click here for steps</Button>
       </Link>
      </div>
    );
  }
}

class CardInfo extends React.Component {
  render() {
      const { author_name,created_at,grade} = this.props
    return (
      <div className="card-body">
        <Row>
          <Col>
            <Badge variant="dark">Author Name</Badge>
          </Col>
          <Col>
            <Badge variant="lite">{author_name}</Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Badge variant="dark">Created Date</Badge>
          </Col>
          <Col>
            <Badge variant="lite">
            <Moment format="YYYY-MM-DD">
                {created_at}
            </Moment>
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Badge variant="dark">Grade</Badge>
          </Col>
          <Col>
            <Badge variant="lite">{grade}</Badge>
          </Col>
        </Row>
      </div>
    );
  }
}

class CardBottom extends React.Component {
  render() {
    return (
      <div className="card-body">
        <Row>
          <Col>
          <Badge variant="dark">Checklist</Badge>
          </Col>
          <Col>
          <Badge variant="dark">Comments</Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary">
               <Badge variant="light">10</Badge>
            </Button>
          </Col>
          <Col>
            <Button variant="primary">
               <Badge variant="light">5</Badge>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

class CardDescription extends React.Component {
  render() {
      const {activity_type,label,research_title,research_pub_url,research_pub_notes} = this.props;
    return (
      <div className="card-body">
        <Row>
          <Col>
          <h4>
          <Badge variant="info" style={{ whiteSpace:'none'}}>{activity_type}</Badge>
          </h4>
          </Col>
        </Row>
        <Row>
        <Col>
          <h6>
          <Badge variant="info">{label}</Badge>
          </h6>
        </Col>
        </Row>
        <Row>
        <Col>
          {research_title}
        </Col>
        </Row>
        <Row>
        <Col>
         <Link to={{pathname: research_pub_url}} target="_blank"> Research Url</Link> 
        </Col>
        </Row>
        <Row>
        <Col>
          {research_pub_notes}
        </Col>
        </Row>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    console.log("propscardss", this.props);
    return (
      <Container>
              <article className="card">
        <Row>
          <Col>
            <CardHeader
              category={this.props.details.education_journal_entry.data.name}
              image={"https://source.unsplash.com/user/erondu/600x400"}
            />
          </Col>
        </Row>
        <Row>
            <Col>
                <CardInfo 
                    grade={this.props.details.education_journal_entry.data.grade}
                    author_name = {this.props.details.education_journal_entry.author_name}
                    created_at = {this.props.details.education_journal_entry.created_at}
                />
            </Col>
        </Row>
        <Row>
          <Col>
            <CardDescription
              activity_type={this.props.details.education_journal_entry.activity_type}
              label={this.props.details.education_journal_entry.data_source.research_pub_subject.label}
              research_title = { this.props.details.education_journal_entry.data.research_title}
              research_pub_url = { this.props.details.education_journal_entry.data.research_pub_url}
              research_pub_notes = {this.props.details.education_journal_entry.data.research_pub_notes}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardBody
              edu_activities={this.props.details.education_journal_entry.edu_activities}
             
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardBottom
              title={this.props.details.education_journal_entry.title}
              text={this.props.details.education_journal_entry.text}
            />
          </Col>
        </Row>
        </article>
      </Container>
    );
  }
}
