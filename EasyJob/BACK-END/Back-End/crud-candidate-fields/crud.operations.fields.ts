import {
  educationModel,
  experienceModel,
  userEducation,
  userExperience,
  updateEducationField,
  updateExperienceField,
} from '../Models/user-fields-schema';

import { authenticate } from 'passport';
import { ResponseRequest } from '../response';
import {
  createField,
  updateField,
  deleteField,
  getCandidateFields,
  getFieldById,
  getField,
} from './fields.service';

import '../jwt-auth';
import { Router } from 'express';

const router: Router = Router();

/*
* Http Method:  GET
* GET Field, Education, Experience
*/

const experienceFieldById:ResponseRequest = getFieldById(userExperience);

const educationFieldById:ResponseRequest = getFieldById(userEducation);

const experienceField:ResponseRequest = getField(userExperience);

const educationField:ResponseRequest = getField(userEducation);

/*
* Get all experiences
*/
router.get('/experience', experienceField);

/*
* Get all educations
*/
router.get('/education', educationField);

router.get('/experience/:id', experienceFieldById);

router.get('/education/:id', educationFieldById);

router.get('/candidate/experiences', authenticate('jwt', { session: false }));

router.get('/candidate/educations', authenticate('jwt', { session: false }));

router.get('/candidate', getCandidateFields);

/*
* Http Method:  POST
* Create New Field, Education, Experience
*/

const createExperience:ResponseRequest = createField(experienceModel);

const createEducation:ResponseRequest = createField(educationModel);

router.post(
  '/experience',
  authenticate('jwt', { session: false }),
  createExperience,
);

router.post(
  '/education',
  authenticate('jwt', { session: false }),
  createEducation,
);

/*
* Http Method:  PUT
* Update  Field, Education, Experience
*/

const updateExperience = updateField(userExperience, updateExperienceField);

const updateEducation = updateField(userEducation, updateEducationField);

router.put(
  '/experience/:id',
  authenticate('jwt', { session: false }),
  updateExperience,
);

router.put(
  '/education/:id',
  authenticate('jwt', { session: false }),
  updateEducation,
);

/*
* Http Method:  DELETE
* Delete Field, Education, Experience
*/
const deleteExperience:ResponseRequest = deleteField(userExperience);

const deleteEducation:ResponseRequest = deleteField(userEducation);

router.delete(
  '/experience/:id',
  authenticate('jwt', { session: false }),
  deleteExperience,
);

router.delete(
  '/education/:id',
  authenticate('jwt', { session: false }),
  deleteEducation,
);

export default router;
