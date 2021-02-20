import React from "react";

export default function ExperienceInput({ data, index, handleSettingsChange }) {
  return (
    <div className="experience-form">
      <div>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-title`}>Title</label>
          <input
            id={`${index}_input-title`}
            className="settings-input input-title"
            type="text"
            defaultValue={data.title && data.title}
            onChange={(e) => handleSettingsChange(e, data.expId, "title")}
          />
        </div>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-company`}>Company</label>
          <input
            id={`${index}_input-company`}
            className="settings-input input-company"
            type="text"
            defaultValue={data.company && data.company}
            onChange={(e) => handleSettingsChange(e, data.expId, "company")}
          />
        </div>
      </div>
      <div>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-start-year`}>Start Year</label>
          <input
            id={`${index}_input-start-year`}
            className="settings-input input-start-year"
            type="number"
            max="2100"
            min="1900"
            defaultValue={data.yearStart && data.yearStart}
            onChange={(e) => handleSettingsChange(e, data.expId, "yearStart")}
          />
        </div>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-end-year`}>End Year</label>
          <input
            id={`${index}_input-end-year`}
            className="settings-input input-end-year"
            type="number"
            max="2100"
            min="1900"
            defaultValue={data.yearEnd && data.yearEnd}
            onChange={(e) => handleSettingsChange(e, data.expId, "yearEnd")}
          />
        </div>
      </div>
      <div className="input-label-pair input-exp-desc">
        <label htmlFor={`${index}_input-exp-desc`}>Description</label>
        <input
          id={`${index}_input-exp-desc`}
          className="settings-input input-description"
          type="text"
          defaultValue={data.description && data.description}
          onChange={(e) => handleSettingsChange(e, data.expId, "description")}
        />
      </div>
    </div>
  );
}
