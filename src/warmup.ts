
import authRequest from './schemas/auth-request.json'
import auth from './schemas/auth.json'
import didSchema from './schemas/did-schema.json'
import docSignature from './schemas/doc-signature.json'
import docSignatureReq from './schemas/doc-signature-request.json'
import groupMembership from './schemas/group-membership.json'
import group from './schemas/group.json'
import identity from './schemas/identity.json'

import { documentWarmer } from '@owlmeans/regov-ssi-core'


documentWarmer('https://owlmeans.com/schemas/did-schema.json#',
  JSON.stringify(didSchema)
    .replace(
      'https://id.meta-belarus.org/schemas/did-schema.json',
      'https://owlmeans.com/schemas/did-schema.json'
    )
)
documentWarmer('https://meta-id.meta-belarus.org/schemas/did-schema.json#',
  JSON.stringify(didSchema)
    .replace(
      'https://id.meta-belarus.org/schemas/did-schema.json',
      'https://meta-id.meta-belarus.org/schemas/did-schema.json'
    )
)
documentWarmer('https://owlmeans.com/schemas/did-schema.json',
  JSON.stringify(didSchema)
    .replace(
      'https://id.meta-belarus.org/schemas/did-schema.json',
      'https://owlmeans.com/schemas/did-schema.json'
    )
)
documentWarmer('https://meta-id.meta-belarus.org/schemas/did-schema.json',
  JSON.stringify(didSchema)
    .replace(
      'https://id.meta-belarus.org/schemas/did-schema.json',
      'https://meta-id.meta-belarus.org/schemas/did-schema.json'
    )
)
documentWarmer('https://owlmeans.com/schema/auth-request', JSON.stringify(authRequest))
documentWarmer('https://meta-id.meta-belarus.org/schema/auth-request', JSON.stringify(authRequest))
documentWarmer('https://owlmeans.com/schema/auth', JSON.stringify(auth))
documentWarmer('https://meta-id.meta-belarus.org/schema/auth', JSON.stringify(auth))
documentWarmer('https://owlmeans.com/schema/doc-signature', JSON.stringify(docSignature))
documentWarmer('https://meta-id.meta-belarus.org/schema/doc-signature', JSON.stringify(docSignature))
documentWarmer('https://owlmeans.com/schema/doc-signature-request', JSON.stringify(docSignatureReq))
documentWarmer('https://meta-id.meta-belarus.org/schema/doc-signature-request', JSON.stringify(docSignatureReq))
documentWarmer('https://owlmeans.com/schema/group-membership', JSON.stringify(groupMembership))
documentWarmer('https://meta-id.meta-belarus.org/schema/group-membership', JSON.stringify(groupMembership))
documentWarmer('https://owlmeans.com/schema/group', JSON.stringify(group))
documentWarmer('https://meta-id.meta-belarus.org/schema/group', JSON.stringify(group))
documentWarmer('https://owlmeans.com/schema/identity', JSON.stringify(identity))
documentWarmer('https://meta-id.meta-belarus.org/schema/identity', JSON.stringify(identity))