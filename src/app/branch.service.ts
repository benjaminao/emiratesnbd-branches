import { Injectable } from '@angular/core';

import { Branch } from './branch';
import { BRANCHS } from './mock-branchs';

@Injectable()
export class BranchService {
  getBranchs(): Promise<Branch[]> {
    return Promise.resolve(BRANCHS);
  }
}
