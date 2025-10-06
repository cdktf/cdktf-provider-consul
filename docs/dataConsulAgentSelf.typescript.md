# `dataConsulAgentSelf` Submodule <a name="`dataConsulAgentSelf` Submodule" id="@cdktf/provider-consul.dataConsulAgentSelf"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAgentSelf <a name="DataConsulAgentSelf" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/agent_self consul_agent_self}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer"></a>

```typescript
import { dataConsulAgentSelf } from '@cdktf/provider-consul'

new dataConsulAgentSelf.DataConsulAgentSelf(scope: Construct, id: string, config?: DataConsulAgentSelfConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig">DataConsulAgentSelfConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig">DataConsulAgentSelfConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulAgentSelf resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct"></a>

```typescript
import { dataConsulAgentSelf } from '@cdktf/provider-consul'

dataConsulAgentSelf.DataConsulAgentSelf.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement"></a>

```typescript
import { dataConsulAgentSelf } from '@cdktf/provider-consul'

dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource"></a>

```typescript
import { dataConsulAgentSelf } from '@cdktf/provider-consul'

dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport"></a>

```typescript
import { dataConsulAgentSelf } from '@cdktf/provider-consul'

dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataConsulAgentSelf resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulAgentSelf to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulAgentSelf that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/agent_self#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulAgentSelf to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter">aclDatacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy">aclDefaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl">aclDisabledTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy">aclDownPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics">aclEnforce08Semantics</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl">aclTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses">addresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr">advertiseAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs">advertiseAddrs</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan">advertiseAddrWan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin">atlasJoin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr">bindAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect">bootstrapExpect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode">bootstrapMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin">checkDeregisterIntervalMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval">checkReapInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval">checkUpdateInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr">clientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir">dataDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode">devMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns">dns</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors">dnsRecursors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature">enableAnonymousSignature</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates">enableCoordinates</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug">enableDebug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec">enableRemoteExec</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog">enableSyslog</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi">enableUi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck">enableUpdateCheck</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt">leaveOnInt</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm">leaveOnTerm</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance">performance</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile">pidFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports">ports</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion">protocolVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan">reconnectTimeoutLan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan">reconnectTimeoutWan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave">rejoinAfterLeave</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin">retryJoin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2">retryJoinEc2</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce">retryJoinGce</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan">retryJoinWan</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts">retryMaxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan">retryMaxAttemptsWan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr">serfLanBindAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr">serfWanBindAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode">serverMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin">sessionTtlMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin">startJoin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan">startJoinWan</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility">syslogFacility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses">taggedAddresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry">telemetry</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile">tlsCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile">tlsCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile">tlsKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming">tlsVerifyIncoming</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing">tlsVerifyOutgoing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname">tlsVerifyServerHostname</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs">translateWanAddrs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir">uiDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets">unixSockets</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease">versionPrerelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision">versionRevision</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aclDatacenter`<sup>Required</sup> <a name="aclDatacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter"></a>

```typescript
public readonly aclDatacenter: string;
```

- *Type:* string

---

##### `aclDefaultPolicy`<sup>Required</sup> <a name="aclDefaultPolicy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy"></a>

```typescript
public readonly aclDefaultPolicy: string;
```

- *Type:* string

---

##### `aclDisabledTtl`<sup>Required</sup> <a name="aclDisabledTtl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl"></a>

```typescript
public readonly aclDisabledTtl: string;
```

- *Type:* string

---

##### `aclDownPolicy`<sup>Required</sup> <a name="aclDownPolicy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy"></a>

```typescript
public readonly aclDownPolicy: string;
```

- *Type:* string

---

##### `aclEnforce08Semantics`<sup>Required</sup> <a name="aclEnforce08Semantics" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics"></a>

```typescript
public readonly aclEnforce08Semantics: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `aclTtl`<sup>Required</sup> <a name="aclTtl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl"></a>

```typescript
public readonly aclTtl: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses"></a>

```typescript
public readonly addresses: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `advertiseAddr`<sup>Required</sup> <a name="advertiseAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr"></a>

```typescript
public readonly advertiseAddr: string;
```

- *Type:* string

---

##### `advertiseAddrs`<sup>Required</sup> <a name="advertiseAddrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs"></a>

```typescript
public readonly advertiseAddrs: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `advertiseAddrWan`<sup>Required</sup> <a name="advertiseAddrWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan"></a>

```typescript
public readonly advertiseAddrWan: string;
```

- *Type:* string

---

##### `atlasJoin`<sup>Required</sup> <a name="atlasJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin"></a>

```typescript
public readonly atlasJoin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bindAddr`<sup>Required</sup> <a name="bindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr"></a>

```typescript
public readonly bindAddr: string;
```

- *Type:* string

---

##### `bootstrapExpect`<sup>Required</sup> <a name="bootstrapExpect" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect"></a>

```typescript
public readonly bootstrapExpect: number;
```

- *Type:* number

---

##### `bootstrapMode`<sup>Required</sup> <a name="bootstrapMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode"></a>

```typescript
public readonly bootstrapMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `checkDeregisterIntervalMin`<sup>Required</sup> <a name="checkDeregisterIntervalMin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin"></a>

```typescript
public readonly checkDeregisterIntervalMin: string;
```

- *Type:* string

---

##### `checkReapInterval`<sup>Required</sup> <a name="checkReapInterval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval"></a>

```typescript
public readonly checkReapInterval: string;
```

- *Type:* string

---

##### `checkUpdateInterval`<sup>Required</sup> <a name="checkUpdateInterval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval"></a>

```typescript
public readonly checkUpdateInterval: string;
```

- *Type:* string

---

##### `clientAddr`<sup>Required</sup> <a name="clientAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr"></a>

```typescript
public readonly clientAddr: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `dataDir`<sup>Required</sup> <a name="dataDir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir"></a>

```typescript
public readonly dataDir: string;
```

- *Type:* string

---

##### `devMode`<sup>Required</sup> <a name="devMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode"></a>

```typescript
public readonly devMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns"></a>

```typescript
public readonly dns: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `dnsRecursors`<sup>Required</sup> <a name="dnsRecursors" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors"></a>

```typescript
public readonly dnsRecursors: string[];
```

- *Type:* string[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `enableAnonymousSignature`<sup>Required</sup> <a name="enableAnonymousSignature" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature"></a>

```typescript
public readonly enableAnonymousSignature: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableCoordinates`<sup>Required</sup> <a name="enableCoordinates" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates"></a>

```typescript
public readonly enableCoordinates: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableDebug`<sup>Required</sup> <a name="enableDebug" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug"></a>

```typescript
public readonly enableDebug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableRemoteExec`<sup>Required</sup> <a name="enableRemoteExec" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec"></a>

```typescript
public readonly enableRemoteExec: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableSyslog`<sup>Required</sup> <a name="enableSyslog" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog"></a>

```typescript
public readonly enableSyslog: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableUi`<sup>Required</sup> <a name="enableUi" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi"></a>

```typescript
public readonly enableUi: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableUpdateCheck`<sup>Required</sup> <a name="enableUpdateCheck" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck"></a>

```typescript
public readonly enableUpdateCheck: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `leaveOnInt`<sup>Required</sup> <a name="leaveOnInt" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt"></a>

```typescript
public readonly leaveOnInt: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leaveOnTerm`<sup>Required</sup> <a name="leaveOnTerm" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm"></a>

```typescript
public readonly leaveOnTerm: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `performance`<sup>Required</sup> <a name="performance" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance"></a>

```typescript
public readonly performance: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `pidFile`<sup>Required</sup> <a name="pidFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile"></a>

```typescript
public readonly pidFile: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports"></a>

```typescript
public readonly ports: NumberMap;
```

- *Type:* cdktf.NumberMap

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: number;
```

- *Type:* number

---

##### `reconnectTimeoutLan`<sup>Required</sup> <a name="reconnectTimeoutLan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan"></a>

```typescript
public readonly reconnectTimeoutLan: string;
```

- *Type:* string

---

##### `reconnectTimeoutWan`<sup>Required</sup> <a name="reconnectTimeoutWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan"></a>

```typescript
public readonly reconnectTimeoutWan: string;
```

- *Type:* string

---

##### `rejoinAfterLeave`<sup>Required</sup> <a name="rejoinAfterLeave" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave"></a>

```typescript
public readonly rejoinAfterLeave: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `retryJoin`<sup>Required</sup> <a name="retryJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin"></a>

```typescript
public readonly retryJoin: string[];
```

- *Type:* string[]

---

##### `retryJoinEc2`<sup>Required</sup> <a name="retryJoinEc2" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2"></a>

```typescript
public readonly retryJoinEc2: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `retryJoinGce`<sup>Required</sup> <a name="retryJoinGce" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce"></a>

```typescript
public readonly retryJoinGce: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `retryJoinWan`<sup>Required</sup> <a name="retryJoinWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan"></a>

```typescript
public readonly retryJoinWan: string[];
```

- *Type:* string[]

---

##### `retryMaxAttempts`<sup>Required</sup> <a name="retryMaxAttempts" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts"></a>

```typescript
public readonly retryMaxAttempts: number;
```

- *Type:* number

---

##### `retryMaxAttemptsWan`<sup>Required</sup> <a name="retryMaxAttemptsWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan"></a>

```typescript
public readonly retryMaxAttemptsWan: number;
```

- *Type:* number

---

##### `serfLanBindAddr`<sup>Required</sup> <a name="serfLanBindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr"></a>

```typescript
public readonly serfLanBindAddr: string;
```

- *Type:* string

---

##### `serfWanBindAddr`<sup>Required</sup> <a name="serfWanBindAddr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr"></a>

```typescript
public readonly serfWanBindAddr: string;
```

- *Type:* string

---

##### `serverMode`<sup>Required</sup> <a name="serverMode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode"></a>

```typescript
public readonly serverMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sessionTtlMin`<sup>Required</sup> <a name="sessionTtlMin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin"></a>

```typescript
public readonly sessionTtlMin: string;
```

- *Type:* string

---

##### `startJoin`<sup>Required</sup> <a name="startJoin" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin"></a>

```typescript
public readonly startJoin: string[];
```

- *Type:* string[]

---

##### `startJoinWan`<sup>Required</sup> <a name="startJoinWan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan"></a>

```typescript
public readonly startJoinWan: string[];
```

- *Type:* string[]

---

##### `syslogFacility`<sup>Required</sup> <a name="syslogFacility" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility"></a>

```typescript
public readonly syslogFacility: string;
```

- *Type:* string

---

##### `taggedAddresses`<sup>Required</sup> <a name="taggedAddresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses"></a>

```typescript
public readonly taggedAddresses: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry"></a>

```typescript
public readonly telemetry: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tlsCaFile`<sup>Required</sup> <a name="tlsCaFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile"></a>

```typescript
public readonly tlsCaFile: string;
```

- *Type:* string

---

##### `tlsCertFile`<sup>Required</sup> <a name="tlsCertFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile"></a>

```typescript
public readonly tlsCertFile: string;
```

- *Type:* string

---

##### `tlsKeyFile`<sup>Required</sup> <a name="tlsKeyFile" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile"></a>

```typescript
public readonly tlsKeyFile: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

##### `tlsVerifyIncoming`<sup>Required</sup> <a name="tlsVerifyIncoming" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming"></a>

```typescript
public readonly tlsVerifyIncoming: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tlsVerifyOutgoing`<sup>Required</sup> <a name="tlsVerifyOutgoing" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing"></a>

```typescript
public readonly tlsVerifyOutgoing: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tlsVerifyServerHostname`<sup>Required</sup> <a name="tlsVerifyServerHostname" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname"></a>

```typescript
public readonly tlsVerifyServerHostname: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `translateWanAddrs`<sup>Required</sup> <a name="translateWanAddrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs"></a>

```typescript
public readonly translateWanAddrs: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uiDir`<sup>Required</sup> <a name="uiDir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir"></a>

```typescript
public readonly uiDir: string;
```

- *Type:* string

---

##### `unixSockets`<sup>Required</sup> <a name="unixSockets" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets"></a>

```typescript
public readonly unixSockets: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionPrerelease`<sup>Required</sup> <a name="versionPrerelease" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease"></a>

```typescript
public readonly versionPrerelease: string;
```

- *Type:* string

---

##### `versionRevision`<sup>Required</sup> <a name="versionRevision" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision"></a>

```typescript
public readonly versionRevision: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAgentSelfConfig <a name="DataConsulAgentSelfConfig" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.Initializer"></a>

```typescript
import { dataConsulAgentSelf } from '@cdktf/provider-consul'

const dataConsulAgentSelfConfig: dataConsulAgentSelf.DataConsulAgentSelfConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



