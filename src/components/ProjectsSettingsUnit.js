import React from "react";

export default function ProjectsSettingsUnit({ index }) {
  return (
    <div>
      <div className="input-label-pair">
        <label htmlFor={`${index}_input-project-headline`}>Headline</label>
        <input
          id={`${index}_input-project-headline`}
          className="settings-input input-project-headline"
          type="text"
          defaultValue="Lead marketing strategy for Christmas campaign"
        />
      </div>
      <div className="input-label-pair">
        <label htmlFor={`${index}_input-project-subheading`}>Subheading</label>
        <input
          id={`${index}_input-project-subheading`}
          className="settings-input input-project-subheading"
          type="text"
          defaultValue="Increased conversion rates by 27%"
        />
      </div>
      <div className="input-label-pair">
        <label htmlFor={`${index}_input-project-description`}>
          Description
        </label>
        <input
          id={`${index}_input-project-description`}
          className="settings-input input-description"
          type="text"
          defaultValue="Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract."
        />
      </div>
    </div>
  );
}
