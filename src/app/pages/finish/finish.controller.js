export default class FinishController {
    constructor(SaveService, StorageService) {
        this._saveService = SaveService;
        this._storageService = StorageService;
        this.newHookah = this._saveService.getHookah();
    }

}
