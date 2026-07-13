/** Shared GraphQL fragments + queries for the Storefront API. */

export const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    productType
    tags
    availableForSale
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 20) {
      nodes {
        url
        altText
        width
        height
      }
    }
    variants(first: 20) {
      nodes {
        id
        title
        sku
        availableForSale
        quantityAvailable
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
      }
    }
    # Optional metafields — return null when not defined in Shopify.
    tagline: metafield(namespace: "custom", key: "tagline") {
      value
    }
    # The "Capacidade" definition was created with a Portuguese key.
    capacity: metafield(namespace: "custom", key: "capacidade") {
      value
    }
    badge: metafield(namespace: "custom", key: "badge") {
      value
    }
    includes: metafield(namespace: "custom", key: "includes") {
      value
    }
    benefits: metafield(namespace: "custom", key: "benefits") {
      value
    }
    warranty: metafield(namespace: "custom", key: "warranty") {
      value
    }
    dimensionsNote: metafield(namespace: "custom", key: "dimensions_note") {
      value
    }
  }
`;

export const GET_PRODUCTS = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: $first, sortKey: BEST_SELLING) {
      nodes {
        ...ProductFields
      }
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE = /* GraphQL */ `
  ${PRODUCT_FRAGMENT}
  query GetProduct($handle: String!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductFields
    }
  }
`;

export const GET_PRODUCT_HANDLES = /* GraphQL */ `
  query GetProductHandles($first: Int!) {
    products(first: $first) {
      nodes {
        handle
      }
    }
  }
`;

// ── Cart ──

export const CART_FRAGMENT = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 50) {
      nodes {
        id
        quantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            title
            availableForSale
            quantityAvailable
            price {
              amount
              currencyCode
            }
            image {
              url
              altText
            }
            product {
              handle
              title
            }
          }
        }
      }
    }
  }
`;

export const CART_CREATE = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation CartCreate($lines: [CartLineInput!], $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartCreate(input: { lines: $lines }) {
      cart {
        ...CartFields
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CART_GET = /* GraphQL */ `
  ${CART_FRAGMENT}
  query CartGet($id: ID!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cart(id: $id) {
      ...CartFields
    }
  }
`;

export const CART_LINES_ADD = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFields
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CART_LINES_UPDATE = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFields
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const CART_LINES_REMOVE = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartFields
      }
      userErrors {
        field
        message
      }
    }
  }
`;
