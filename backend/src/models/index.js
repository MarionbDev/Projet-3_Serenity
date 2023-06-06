require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const DoctorManager = require("./DoctorManager");
const PatientManager = require("./PatientManager");
const ContentManager = require("./ContentManager");
const InterventionManager = require("./InterventionManager");
const ProfesionnelManager = require("./ProfesionnelManager");
const ChecklistManager = require("./ChecklistManager");
const PodcastManager = require("./PodcastManager");
const SurgeryTypeManager = require("./SurgeryTypeManager");
const ProtocolManager = require("./ProtocolManager");

models.doctor = new DoctorManager();
models.doctor.setDatabase(pool);
models.patient = new PatientManager();
models.patient.setDatabase(pool);
models.content = new ContentManager();
models.content.setDatabase(pool);
models.intervention = new InterventionManager();
models.intervention.setDatabase(pool);
models.profesionnel = new ProfesionnelManager();
models.profesionnel.setDatabase(pool);
models.checklist = new ChecklistManager();
models.checklist.setDatabase(pool);
models.podcast = new PodcastManager();
models.podcast.setDatabase(pool);
models.surgeryType = new SurgeryTypeManager();
models.surgeryType.setDatabase(pool);
models.protocol = new ProtocolManager();
models.protocol.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
