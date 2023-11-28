# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-consul.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulProvider <a name="ConsulProvider" id="@cdktf/provider-consul.provider.ConsulProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs consul}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

new provider.ConsulProvider(scope: Construct, id: string, config?: ConsulProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig">ConsulProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.provider.ConsulProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderConfig">ConsulProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt">resetAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaFile">resetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPath">resetCaPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCaPem">resetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertFile">resetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetCertPem">resetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth">resetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps">resetInsecureHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile">resetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem">resetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.provider.ConsulProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.provider.ConsulProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.provider.ConsulProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.provider.ConsulProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-consul.provider.ConsulProvider.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-consul.provider.ConsulProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAuthJwt` <a name="resetAuthJwt" id="@cdktf/provider-consul.provider.ConsulProvider.resetAuthJwt"></a>

```typescript
public resetAuthJwt(): void
```

##### `resetCaFile` <a name="resetCaFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaFile"></a>

```typescript
public resetCaFile(): void
```

##### `resetCaPath` <a name="resetCaPath" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPath"></a>

```typescript
public resetCaPath(): void
```

##### `resetCaPem` <a name="resetCaPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCaPem"></a>

```typescript
public resetCaPem(): void
```

##### `resetCertFile` <a name="resetCertFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertFile"></a>

```typescript
public resetCertFile(): void
```

##### `resetCertPem` <a name="resetCertPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetCertPem"></a>

```typescript
public resetCertPem(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.provider.ConsulProvider.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-consul.provider.ConsulProvider.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHttpAuth` <a name="resetHttpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.resetHttpAuth"></a>

```typescript
public resetHttpAuth(): void
```

##### `resetInsecureHttps` <a name="resetInsecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.resetInsecureHttps"></a>

```typescript
public resetInsecureHttps(): void
```

##### `resetKeyFile` <a name="resetKeyFile" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyFile"></a>

```typescript
public resetKeyFile(): void
```

##### `resetKeyPem` <a name="resetKeyPem" id="@cdktf/provider-consul.provider.ConsulProvider.resetKeyPem"></a>

```typescript
public resetKeyPem(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.provider.ConsulProvider.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-consul.provider.ConsulProvider.resetScheme"></a>

```typescript
public resetScheme(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.provider.ConsulProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConsulProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

provider.ConsulProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

provider.ConsulProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

provider.ConsulProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.provider.ConsulProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

provider.ConsulProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConsulProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsulProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsulProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.provider.ConsulProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsulProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput">authJwtInput</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput">caFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput">caPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput">caPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput">certFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput">certPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput">httpAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput">insecureHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput">keyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput">keyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caFile">caFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPath">caPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.caPem">caPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certFile">certFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.certPem">certPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth">httpAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps">insecureHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyFile">keyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.keyPem">keyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.provider.ConsulProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.provider.ConsulProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.provider.ConsulProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.provider.ConsulProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-consul.provider.ConsulProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-consul.provider.ConsulProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `authJwtInput`<sup>Optional</sup> <a name="authJwtInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwtInput"></a>

```typescript
public readonly authJwtInput: ConsulProviderAuthJwt;
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `caFileInput`<sup>Optional</sup> <a name="caFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFileInput"></a>

```typescript
public readonly caFileInput: string;
```

- *Type:* string

---

##### `caPathInput`<sup>Optional</sup> <a name="caPathInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPathInput"></a>

```typescript
public readonly caPathInput: string;
```

- *Type:* string

---

##### `caPemInput`<sup>Optional</sup> <a name="caPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPemInput"></a>

```typescript
public readonly caPemInput: string;
```

- *Type:* string

---

##### `certFileInput`<sup>Optional</sup> <a name="certFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFileInput"></a>

```typescript
public readonly certFileInput: string;
```

- *Type:* string

---

##### `certPemInput`<sup>Optional</sup> <a name="certPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPemInput"></a>

```typescript
public readonly certPemInput: string;
```

- *Type:* string

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ConsulProviderHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>[]

---

##### `httpAuthInput`<sup>Optional</sup> <a name="httpAuthInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuthInput"></a>

```typescript
public readonly httpAuthInput: string;
```

- *Type:* string

---

##### `insecureHttpsInput`<sup>Optional</sup> <a name="insecureHttpsInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttpsInput"></a>

```typescript
public readonly insecureHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyFileInput`<sup>Optional</sup> <a name="keyFileInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFileInput"></a>

```typescript
public readonly keyFileInput: string;
```

- *Type:* string

---

##### `keyPemInput`<sup>Optional</sup> <a name="keyPemInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPemInput"></a>

```typescript
public readonly keyPemInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.provider.ConsulProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProvider.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-consul.provider.ConsulProvider.property.authJwt"></a>

```typescript
public readonly authJwt: ConsulProviderAuthJwt;
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.caFile"></a>

```typescript
public readonly caFile: string;
```

- *Type:* string

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPath"></a>

```typescript
public readonly caPath: string;
```

- *Type:* string

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.caPem"></a>

```typescript
public readonly caPem: string;
```

- *Type:* string

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.certFile"></a>

```typescript
public readonly certFile: string;
```

- *Type:* string

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* string

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProvider.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProvider.property.header"></a>

```typescript
public readonly header: IResolvable | ConsulProviderHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>[]

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-consul.provider.ConsulProvider.property.httpAuth"></a>

```typescript
public readonly httpAuth: string;
```

- *Type:* string

---

##### `insecureHttps`<sup>Optional</sup> <a name="insecureHttps" id="@cdktf/provider-consul.provider.ConsulProvider.property.insecureHttps"></a>

```typescript
public readonly insecureHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyFile"></a>

```typescript
public readonly keyFile: string;
```

- *Type:* string

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-consul.provider.ConsulProvider.property.keyPem"></a>

```typescript
public readonly keyPem: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProvider.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProvider.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.provider.ConsulProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulProviderAuthJwt <a name="ConsulProviderAuthJwt" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

const consulProviderAuthJwt: provider.ConsulProviderAuthJwt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod">authMethod</a></code> | <code>string</code> | The name of the auth method to use for login. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken">bearerToken</a></code> | <code>string</code> | The bearer token to present to the auth method during login for authentication purposes. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Specifies arbitrary KV metadata linked to the token. Can be useful to track origins. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity">useTerraformCloudWorkloadIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable. |

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.authMethod"></a>

```typescript
public readonly authMethod: string;
```

- *Type:* string

The name of the auth method to use for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#auth_method ConsulProvider#auth_method}

---

##### `bearerToken`<sup>Optional</sup> <a name="bearerToken" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.bearerToken"></a>

```typescript
public readonly bearerToken: string;
```

- *Type:* string

The bearer token to present to the auth method during login for authentication purposes.

For the Kubernetes auth method this is a [Service Account Token (JWT)](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#service-account-tokens).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#bearer_token ConsulProvider#bearer_token}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies arbitrary KV metadata linked to the token. Can be useful to track origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#meta ConsulProvider#meta}

---

##### `useTerraformCloudWorkloadIdentity`<sup>Optional</sup> <a name="useTerraformCloudWorkloadIdentity" id="@cdktf/provider-consul.provider.ConsulProviderAuthJwt.property.useTerraformCloudWorkloadIdentity"></a>

```typescript
public readonly useTerraformCloudWorkloadIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use a [Terraform Workload Identity token](https://developer.hashicorp.com/terraform/cloud-docs/workspaces/dynamic-provider-credentials/workload-identity-tokens). The token will be read from the `TFC_WORKLOAD_IDENTITY_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#use_terraform_cloud_workload_identity ConsulProvider#use_terraform_cloud_workload_identity}

---

### ConsulProviderConfig <a name="ConsulProviderConfig" id="@cdktf/provider-consul.provider.ConsulProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

const consulProviderConfig: provider.ConsulProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.address">address</a></code> | <code>string</code> | The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile">caFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath">caPath</a></code> | <code>string</code> | A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem">caPem</a></code> | <code>string</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile">certFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem">certPem</a></code> | <code>string</code> | PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter">datacenter</a></code> | <code>string</code> | The datacenter to use. Defaults to that of the agent. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth">httpAuth</a></code> | <code>string</code> | HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps">insecureHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean value to disable SSL certificate verification; |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile">keyFile</a></code> | <code>string</code> | A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem">keyPem</a></code> | <code>string</code> | PEM-encoded private key, required if `cert_file` or `cert_pem` is specified. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#namespace ConsulProvider#namespace}. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme">scheme</a></code> | <code>string</code> | The URL scheme of the agent to use ("http" or "https"). Defaults to "http". |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderConfig.property.token">token</a></code> | <code>string</code> | The ACL token to use by default when making requests to the agent. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The HTTP(S) API address of the agent to use. Defaults to "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#address ConsulProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#alias ConsulProvider#alias}

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.authJwt"></a>

```typescript
public readonly authJwt: ConsulProviderAuthJwt;
```

- *Type:* <a href="#@cdktf/provider-consul.provider.ConsulProviderAuthJwt">ConsulProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#auth_jwt ConsulProvider#auth_jwt}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caFile"></a>

```typescript
public readonly caFile: string;
```

- *Type:* string

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#ca_file ConsulProvider#ca_file}

---

##### `caPath`<sup>Optional</sup> <a name="caPath" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPath"></a>

```typescript
public readonly caPath: string;
```

- *Type:* string

A path to a directory of PEM-encoded certificate authority files to use to check the authenticity of client and server connections.

Can also be specified with the `CONSUL_CAPATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#ca_path ConsulProvider#ca_path}

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.caPem"></a>

```typescript
public readonly caPem: string;
```

- *Type:* string

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#ca_pem ConsulProvider#ca_pem}

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certFile"></a>

```typescript
public readonly certFile: string;
```

- *Type:* string

A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#cert_file ConsulProvider#cert_file}

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* string

PEM-encoded certificate provided to the remote agent; requires use of `key_file` or `key_pem`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#cert_pem ConsulProvider#cert_pem}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

The datacenter to use. Defaults to that of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#datacenter ConsulProvider#datacenter}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.header"></a>

```typescript
public readonly header: IResolvable | ConsulProviderHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.provider.ConsulProviderHeader">ConsulProviderHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#header ConsulProvider#header}

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.httpAuth"></a>

```typescript
public readonly httpAuth: string;
```

- *Type:* string

HTTP Basic Authentication credentials to be used when communicating with Consul, in the format of either `user` or `user:pass`.

This may also be specified using the `CONSUL_HTTP_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#http_auth ConsulProvider#http_auth}

---

##### `insecureHttps`<sup>Optional</sup> <a name="insecureHttps" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.insecureHttps"></a>

```typescript
public readonly insecureHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean value to disable SSL certificate verification;

setting this value to true is not recommended for production use. Only use this with scheme set to "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#insecure_https ConsulProvider#insecure_https}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyFile"></a>

```typescript
public readonly keyFile: string;
```

- *Type:* string

A path to a PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#key_file ConsulProvider#key_file}

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.keyPem"></a>

```typescript
public readonly keyPem: string;
```

- *Type:* string

PEM-encoded private key, required if `cert_file` or `cert_pem` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#key_pem ConsulProvider#key_pem}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#namespace ConsulProvider#namespace}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

The URL scheme of the agent to use ("http" or "https"). Defaults to "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#scheme ConsulProvider#scheme}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.provider.ConsulProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The ACL token to use by default when making requests to the agent.

Can also be specified with `CONSUL_HTTP_TOKEN` or `CONSUL_TOKEN` as an environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#token ConsulProvider#token}

---

### ConsulProviderHeader <a name="ConsulProviderHeader" id="@cdktf/provider-consul.provider.ConsulProviderHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.provider.ConsulProviderHeader.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-consul'

const consulProviderHeader: provider.ConsulProviderHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.name">name</a></code> | <code>string</code> | The name of the header. |
| <code><a href="#@cdktf/provider-consul.provider.ConsulProviderHeader.property.value">value</a></code> | <code>string</code> | The value of the header. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#name ConsulProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.provider.ConsulProviderHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs#value ConsulProvider#value}

---



