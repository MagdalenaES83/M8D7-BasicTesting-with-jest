import supertest from "supertest";
import app from "../app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const request = supertest(app);

describe("testing environment", () => {
  it(" true is true", () => {
    expect(true).toBe(true);
  });
});

describe("testing the server", () => {
  beforeAll((done) => {

    mongoose.connect(process.env.MONGO_URL_KEY).then(() => {
      console.log("Connected to Atlas");
      done();
    });
  });
  
  it(" true is true", () => {
    expect(true).toBe(true);
  });

  afterAll((done) => {
    mongoose.connection.dropDatabase().then(() => {
        mongoose.connection.close().then(() => {
        done();
      });
    });
  });

  
  
});
