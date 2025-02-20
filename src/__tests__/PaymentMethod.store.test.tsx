import { IResidenceItem } from "../Components/types";
import PaymentMethodStore, {
  selectedCountryInitValue,
} from "../store/PaymentMethod.store";
import { fake_payment_methods } from "./fakes/payment_methods";
import { fake_residence_list } from "./fakes/residence_list";

describe("Store", () => {
  let store: PaymentMethodStore;
  beforeEach(() => {
    store = new PaymentMethodStore();
  });
  afterEach(() => {
    store.clear();
  });

  it("Should have loading as false", () => {
    expect(store.loading).toBeFalsy();
  });

  it("Should update country list", () => {
    store.updateCountryList(fake_residence_list.residence_list);
    expect(store.countryListStore).toHaveLength(
      fake_residence_list.residence_list.length
    );
    expect(store.countryListStore).toEqual(fake_residence_list.residence_list);
  });

  it("Should update the selected country", () => {
    store.updateSelectedCountry(fake_residence_list.residence_list[0]);
    expect(store.selectedCountry).toEqual(
      fake_residence_list.residence_list[0]
    );
  });

  it("Should have initial select country value on resetSelectedCountry", () => {
    expect(store.selectedCountry).toEqual(selectedCountryInitValue);
  });

  it("Should update payment methods", () => {
    expect(store.paymentMethods).toHaveLength(0);
    store.updatePaymentMethods(fake_payment_methods.payment_methods);
    expect(store.paymentMethods).toEqual(fake_payment_methods.payment_methods);
    expect(store.paymentMethods).toHaveLength(1);
  });

  it("Should clear payment methods on resetPaymentMethods", () => {
    store.updatePaymentMethods(fake_payment_methods.payment_methods);
    expect(store.paymentMethods).toEqual(fake_payment_methods.payment_methods);
    store.resetPaymentMethods();
    expect(store.paymentMethods).toHaveLength(0);
  });

  it("Should have loading as fulsy by default", () => {
    expect(store.loading).toBeFalsy();
  });
  it("Should have loading as truthy on toggleLoading", () => {
    store.toggleLoading();
    expect(store.loading).toBeTruthy();
  });
});
