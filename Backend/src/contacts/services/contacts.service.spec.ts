<<<<<<< HEAD
import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
=======
import { Test, TestingModule } from "@nestjs/testing";
import { ContactsService } from "./contacts.service";
import { beforeEach } from "node:test";

describe("ContactsService", () => {
>>>>>>> c2045de93eaebde71f8e98a0bc3a0bebbdc894a7
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsService],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

<<<<<<< HEAD
  it('should be defined', () => {
=======
  it("should be defined", () => {
>>>>>>> c2045de93eaebde71f8e98a0bc3a0bebbdc894a7
    expect(service).toBeDefined();
  });
});
