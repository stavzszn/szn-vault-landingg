import { test } from "node:test";
import { strict as assert } from "node:assert";
import { VAULT_PRICING } from "./pricing";

test("vault purchase price is 97 euros", () => {
  assert.equal(VAULT_PRICING.price, 97);
  assert.equal(VAULT_PRICING.currency, "EUR");
});

test("vault original price is 149 euros", () => {
  assert.equal(VAULT_PRICING.originalPrice, 149);
});