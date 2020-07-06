import React, { } from "react";
import classNames from "classnames";
import { mapToCssModules } from "./mapToCss";

export const TEXT_TYPE = "textInput";
export const CHECKBOX_TYPE = "radio";
export const TEXTAREA_TYPE = "textArea";
export const SELECT_TYPE = "select";
export const TEXT_FILE = "multi_file_upload";
/**
 * @param {type, name, label, placeholder, validation, onChange, readOnly} props
 */
const FormField = (props) => {
  let {
    parentClassName,
    className,
    type,
    name,
    label,
    placeholder,
    validation,
    onChange,
    readOnly,
    textLeft,
    textRight,
    iconLeft,
    iconRight,
    infoMessage,
    disableMaterial,
    cssModule,
  } = props;

  function getMaterialTextComponent(type) {
    let parentClasses = mapToCssModules(
      classNames(
        "form-group floating",
        parentClassName ? parentClassName : "",
        disableMaterial ? "" : "form-material",
        textLeft ? "input-group" : false,
        textRight ? "input-group" : false,
        iconLeft ? "input-group" : false,
        iconRight ? "input-group" : false
      ),
      cssModule
    );
    let classes = mapToCssModules(classNames("form-control"), cssModule);
    let step;
    
    let inputElement = (
      <input
        name={name}
        type={type}
        className={classes}
        onChange={onChange}
        readOnly={readOnly ? readOnly : false}
        {...props}
        step={step ? step : false}
      />
    );
    return (
      <div className={parentClasses}>
        {disableMaterial ? (
          ""
        ) : (
          <label className="floating-label">{label}</label>
        )}
        {textLeft ? <span className="input-group-addon">{textLeft}</span> : ""}
        {iconLeft ? (
          <span className="input-group-addon">
            <span className={"icon " + iconLeft} aria-hidden="true" />
          </span>
        ) : (
          ""
        )}
        {inputElement}
        {textRight ? (
          <span className="input-group-addon">{textRight}</span>
        ) : (
          ""
        )}
        {iconRight ? (
          <span className="input-group-addon">
            <span className={"icon " + iconRight} aria-hidden="true" />
          </span>
        ) : (
          ""
        )}
      </div>
    );
  }

  function getCheckboxComponent() {
    let parentClasses = mapToCssModules(
      classNames("checkbox-custom checkbox-primary"),
      cssModule
    );
    //generating random string for htmFor
    let uniqueId = "_" + Math.random().toString(36).substr(2, 9);
    return (
      <div>
        <div className={parentClasses}>
        {label && <label>{label}</label>}
        {
                props.options &&
                props.options.map((option, index) => {
                    console.log('propsopradio',option)
                    let tilte = (<label htmlFor={index}>{option}</label>)

              return (
                  <div>
                  {tilte}
                <input name={name} type="radio" value={option} {...props} />
                  </div>
              );
            })}
         
        </div>
      </div>
    );
  }

  let field;
  switch (type) {
    case TEXTAREA_TYPE:
      field = (
        <div className="form-group">
          {label && <label>{label}</label>}
          <textarea
            name={name}
            placeholder={placeholder}
            className={className}
            rows={props.rows}
          />
        </div>
      );
      break;
    case TEXT_FILE:
        field = (
            <div className="form-group">
              {label && <label>{label}</label>}
              <input
                name={name}
                placeholder={placeholder}
                className={className}
                type="file"
              />
            </div>
          );
          break;
    case CHECKBOX_TYPE:
      field = getCheckboxComponent();
      break;
    case SELECT_TYPE:
      className = "form-control " + (className ? className : "");
      let parentClasses =
        "form-group " + (parentClassName ? parentClassName : "");
        console.log('propsoptions',props.options)
      field = (
        <div className={parentClasses}>
          {label && <label>{label}</label>}
          <select onChange={onChange} className={className} name={name}>
            {
                props.options &&
                props.options.map((option, index) => {
                    console.log('propsop',option)
              return (
                <option value={option.value} data-key={index}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      );
      break;
    case TEXT_TYPE:
    default:
      field = getMaterialTextComponent(type);
      break;
  }
  return field;
};

export default FormField;
