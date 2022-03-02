import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Skills.module.scss';

const Skills = ({ skills = [], style, className }) => {
  return (
    <div className={extendClasses(classes.Skills, className)} style={style}>
      {skills.map((skill) => (
        <div className={classes.Skill} key={skill}>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
