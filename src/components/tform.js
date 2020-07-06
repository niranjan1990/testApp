import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import FormField, {
  CHECKBOX_TYPE,
  TEXT_TYPE,
  TEXTAREA_TYPE,
  NUMBER_TYPE,
} from "../utils/formField";

const formData = [
  {
    form_template: {
      id: 282,
      user_id: 100,
      post_id: 21967,
      organization_id: 20,
      version: "1.0",
      submission_type: "user",
      allow_share: false,
      terms_url: null,
      reuseable_component: false,
      editable: false,
      is_subscription: false,
      client_controller: null,
      sponsor_logo_url: null,
      is_public_submission: false,
      email_notification: null,
      template_fields: [
        {
          index: "id_20199111570770651704",
          label: "Record research/publication updates",
          position: 0,
          required: false,
          client_id: "id_jot_20199111570770651704",
          component: "tabs",
          is_repeatable: false,
          child_template_fields: [
            {
              index: "id_2020061578359337116",
              label: "What Name do you want to give this Activity Entry?",
              tooltip: null,
              position: 0,
              required: true,
              client_id: "name",
              component: "textInput",
              description: null,
              placeholder: null,
              cue_prompt_description:
                "Use any name that will help you identify and track this activity",
              field_validation_options: {},
            },
            {
              index: "id_2020061578359417009",
              label: "Which class grade does this update relate to?",
              options: ["Value 1", "Value 2"],
              tooltip: null,
              position: 1,
              required: true,
              client_id: "grade",
              component: "select",
              description: null,
              placeholder: "placeholder",
              temp_options: "Value 1\nValue 2",
              data_source_id: 2213,
              data_source_name: "Which class grade does this update relate to?",
              options_key_value: {
                options: [
                  {
                    label: "Grade 7 and Earlier",
                    value: 7,
                    order_list: 1,
                    description: "Grade 7 and Earlier",
                  },
                  {
                    label: "Grade 8",
                    value: 8,
                    order_list: 2,
                    description: "Grade 8",
                  },
                  {
                    label: "Grade 9",
                    value: 9,
                    order_list: 3,
                    description: "Grade 9",
                  },
                  {
                    label: "Grade 10",
                    value: 10,
                    order_list: 4,
                    description: "Grade 10",
                  },
                  {
                    label: "Grade 11",
                    value: 11,
                    order_list: 5,
                    description: "Grade 11",
                  },
                  {
                    label: "Grade 12",
                    value: 12,
                    order_list: 6,
                    description: "Grade 12",
                  },
                ],
                data_types: null,
              },
              cue_prompt_description:
                "Marking the grade in which you participated in this activity could help with tracking and analyzing activities",
              field_validation_options: {},
            },
            {
              index: "id_20199111570770854220",
              label: "Subject of Research",
              options: ["Value 1", "Value 2"],
              tooltip: null,
              position: 6,
              required: true,
              client_id: "research_pub_subject",
              component: "select",
              description: null,
              placeholder: "placeholder",
              temp_options: "Value 1\nValue 2",
              data_source_id: 2244,
              data_source_name: "Subject",
              options_key_value: {
                options: [
                  {
                    label: "Art/Music/Theater",
                    value: 1,
                  },
                  {
                    label: "Biology",
                    value: 2,
                  },
                  {
                    label: "Business/Economics",
                    value: 3,
                  },
                  {
                    label: "Chemistry",
                    value: 4,
                  },
                  {
                    label: "Computer Science",
                    value: 5,
                  },
                  {
                    label: "English",
                    value: 6,
                  },
                  {
                    label: "Language",
                    value: 7,
                  },
                  {
                    label: "Mathematics",
                    value: 8,
                  },
                  {
                    label: "Physics",
                    value: 9,
                  },
                  {
                    label: "Social Studies",
                    value: 10,
                  },
                  {
                    label: "Other",
                    value: 11,
                  },
                ],
              },
              field_validation_options: {},
            },
            {
              index: "research_pub_sponsor_name",
              label: "Title of Research",
              tooltip: null,
              position: 5,
              required: true,
              client_id: "research_title",
              component: "textInput",
              description: null,
              placeholder: null,
              field_validation_options: {},
            },
            {
              index: "id_20199111570770884739",
              label: "Reference URL for research/publication",
              tooltip: null,
              position: 7,
              required: false,
              client_id: "research_pub_url",
              component: "textInput",
              description: null,
              placeholder: null,
              field_validation_options: {},
            },
            {
              index: "id_20199111570770898338",
              label: "Notes",
              tooltip: "Add any additional information",
              position: 9,
              required: false,
              client_id: "research_pub_notes",
              component: "textArea",
              description: "Enter Applicable notes",
              placeholder: "Type text",
              field_validation_options: {},
            },
            {
              index: "id_20199111570770903302",
              label: "Upload Record of Accomplishment/Achievement",
              tooltip: null,
              position: 10,
              required: false,
              client_id: "research_pub_uploads",
              component: "multi_file_upload",
              description: null,
              placeholder: "Select Multiple Files",
              privacy_type: "private",
              field_validation_options: {},
            },
            {
              index: "ai_training_user",
              label: "AI Training User Case",
              options: ["Yes", "No"],
              tooltip: null,
              accesses: {
                roles: ["form_author", "role_master"],
                expression:
                  "$root.user.id == template.user_id || $root.user.current_admin.role_master",
                subscriptions: null,
              },
              position: 10,
              required: false,
              client_id: "ai_training_user",
              component: "radio",
              description: null,
              placeholder: "Pick Applicable Choice",
              temp_options: "Yes\nNo",
              data_source_id: 2218,
              data_source_name: "AI Training User Case",
              is_default_label: true,
              options_key_value: {},
              field_validation_options: {},
            },
          ],
          field_validation_options: {},
        },
      ],
      created_at: "2019-10-11T05:29:48.605Z",
      updated_at: "2020-04-18T14:40:29.080Z",
      form_submissions_count: 0,
      submit_action: null,
      display_discussion_for_form_submissions: false,
      user_access: null,
      view_settings: null,
      use_case_id: null,
      fill_info:
        "<p>Jot details about the research/publication efforts and achievements along the high school journey. &nbsp;Add new records and update previous records.</p>",
      fill_info_bg_color: "#fcf53d",
      post: {
        id: 21967,
        user_id: 100,
        title: "Record a research or publication update",
        details:
          '<p><span style="font-size: 12px;">This will add an update to your&nbsp;Research/Publication Tile.</span></p><p><span style="font-size: 12px;">cT282_1019</span></p>',
        privacy: "invited",
        display_discussion: false,
      },
      user: {
        id: 100,
        name: "author",
      },
    },
  },
];

export default class tform extends React.Component {
  constructor() {
    super();

    this.state = {
      formdata: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);

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
      .get(`https://life.admin.cuetree.com/form_templates/282`, options)
      .then((res) => {
        console.log("resultapi", res);
        const formdata = res.data;
        console.log(formdata);

        this.setState({
          formdata: formdata,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      formdata: formData[0].form_template,
    });
  }
  componentWillMount() {
    this.getUsersData();
  }

  
  handleSubmit(event) {
      event.preventDefault();
      
    console.log( event.target[1].value);
    const tempPlayer = new FormData(event.target);
    let formResponse = [];

    for (let [key, value] of tempPlayer.entries()) {
      formResponse.push({key, value});
    }
    console.log('formresponse',formResponse)
   

    let finalResponse= {
        'created_by':formResponse[0].value,
        'data':{
           'name':formResponse[1].value,
           'grade':formResponse[2].value,
           'research_pub_subject':formResponse[3].value,
           'research_pub_notes':formResponse[4].value,
           'research_pub_uploads':formResponse[5].value,
           'research_pub_uploads':formResponse[6].value,
           'research_pub_url':formResponse[7].value,
           'ai_training_user':formResponse[8].value,
        }
    }
    console.log('finalresponse',finalResponse);
     return false; 
   /* axios.post('/postcard', 
        finalResponse
      )
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });*/
   

}

  render() {
    console.log(
      "carddata",
      this.state.formdata.template_fields[0].child_template_fields
    );
    if (this.state.formdata !== "undefined") {
      let formElements = [];
      Object.keys(
        this.state.formdata.template_fields[0].child_template_fields
      ).forEach((key, value) =>
    
       {  let val = this.state.formdata.template_fields[0].child_template_fields[key]
         
        if(val.component == 'radio'){
            formElements.push(
                <FormField
                  type={val.component}
                  label={val.label}
                  name={val.client_id}
                  options= {val.options}
                > 
                </FormField>
              ) 
        }else if(val.component == 'select'){
            formElements.push(
                <FormField
                  type={val.component}
                  label={val.label}
                  name={val.client_id}
                  options= {val.options_key_value.options}
                > 
                </FormField>
              ) 
        }else{
            formElements.push(
                <FormField
                  type={val.component}
                  label={val.label}
                  name={val.client_id}
                  
                />
              )
        }
       }
      );
      return (
        <div>
        <container>
        <form id="task-create-form" onSubmit = {(e) => {this.handleSubmit(e)}}>
            <input type="hidden" name="created_by" value={this.state.formdata.user_id}></input>
                {formElements}
                <Button type="submit">Button</Button>
            </form>
        </container>  
        </div>
      );
    }
  }
}

