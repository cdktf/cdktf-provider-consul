# `consul_service`

Refer to the Terraform Registory for docs: [`consul_service`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service).

# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-consul.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-consul.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service consul_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.Service.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

new service.Service(scope: Construct, id: string, config: ServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.service.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.service.Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.service.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.service.Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.service.Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.service.Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.service.Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.service.Service.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.service.Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.service.Service.putCheck">putCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetCheck">resetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetEnableTagOverride">resetEnableTagOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetServiceId">resetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.service.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.service.Service.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.service.Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.Service.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.service.Service.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.service.Service.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.service.Service.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.service.Service.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.service.Service.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.service.Service.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.service.Service.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.service.Service.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.service.Service.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.service.Service.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.service.Service.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.service.Service.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.service.Service.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.service.Service.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.service.Service.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.service.Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.service.Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.service.Service.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.service.Service.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.service.Service.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCheck` <a name="putCheck" id="@cdktf/provider-consul.service.Service.putCheck"></a>

```typescript
public putCheck(value: IResolvable | ServiceCheck[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.Service.putCheck.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>[]

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-consul.service.Service.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetCheck` <a name="resetCheck" id="@cdktf/provider-consul.service.Service.resetCheck"></a>

```typescript
public resetCheck(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.service.Service.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetEnableTagOverride` <a name="resetEnableTagOverride" id="@cdktf/provider-consul.service.Service.resetEnableTagOverride"></a>

```typescript
public resetEnableTagOverride(): void
```

##### `resetExternal` <a name="resetExternal" id="@cdktf/provider-consul.service.Service.resetExternal"></a>

```typescript
public resetExternal(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.service.Service.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.service.Service.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.service.Service.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.service.Service.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-consul.service.Service.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetServiceId` <a name="resetServiceId" id="@cdktf/provider-consul.service.Service.resetServiceId"></a>

```typescript
public resetServiceId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-consul.service.Service.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.service.Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.service.Service.isConstruct"></a>

```typescript
import { service } from '@cdktf/provider-consul'

service.Service.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.service.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.service.Service.isTerraformElement"></a>

```typescript
import { service } from '@cdktf/provider-consul'

service.Service.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.service.Service.isTerraformResource"></a>

```typescript
import { service } from '@cdktf/provider-consul'

service.Service.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.service.Service.generateConfigForImport"></a>

```typescript
import { service } from '@cdktf/provider-consul'

service.Service.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.service.Service.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.check">check</a></code> | <code><a href="#@cdktf/provider-consul.service.ServiceCheckList">ServiceCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.checkInput">checkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.enableTagOverrideInput">enableTagOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.externalInput">externalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.nodeAttributeInput">nodeAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.enableTagOverride">enableTagOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.external">external</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.nodeAttribute">nodeAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.service.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.service.Service.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.service.Service.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.service.Service.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.service.Service.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.service.Service.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.service.Service.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.service.Service.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.service.Service.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.service.Service.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.service.Service.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.service.Service.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.service.Service.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.service.Service.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktf/provider-consul.service.Service.property.check"></a>

```typescript
public readonly check: ServiceCheckList;
```

- *Type:* <a href="#@cdktf/provider-consul.service.ServiceCheckList">ServiceCheckList</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-consul.service.Service.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `checkInput`<sup>Optional</sup> <a name="checkInput" id="@cdktf/provider-consul.service.Service.property.checkInput"></a>

```typescript
public readonly checkInput: IResolvable | ServiceCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>[]

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.service.Service.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `enableTagOverrideInput`<sup>Optional</sup> <a name="enableTagOverrideInput" id="@cdktf/provider-consul.service.Service.property.enableTagOverrideInput"></a>

```typescript
public readonly enableTagOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktf/provider-consul.service.Service.property.externalInput"></a>

```typescript
public readonly externalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.service.Service.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.service.Service.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.service.Service.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.service.Service.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nodeAttributeInput`<sup>Optional</sup> <a name="nodeAttributeInput" id="@cdktf/provider-consul.service.Service.property.nodeAttributeInput"></a>

```typescript
public readonly nodeAttributeInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.service.Service.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-consul.service.Service.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-consul.service.Service.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-consul.service.Service.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.service.Service.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.service.Service.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `enableTagOverride`<sup>Required</sup> <a name="enableTagOverride" id="@cdktf/provider-consul.service.Service.property.enableTagOverride"></a>

```typescript
public readonly enableTagOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-consul.service.Service.property.external"></a>

```typescript
public readonly external: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.service.Service.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.service.Service.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.service.Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.service.Service.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-consul.service.Service.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.service.Service.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.service.Service.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-consul.service.Service.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.service.Service.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.service.Service.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCheck <a name="ServiceCheck" id="@cdktf/provider-consul.service.ServiceCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.service.ServiceCheck.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

const serviceCheck: service.ServiceCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.checkId">checkId</a></code> | <code>string</code> | An ID, *unique per agent*. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.interval">interval</a></code> | <code>string</code> | The interval to wait between each health-check invocation. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.name">name</a></code> | <code>string</code> | The name of the health-check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.timeout">timeout</a></code> | <code>string</code> | Specifies a timeout for outgoing connections in the case of a HTTP or TCP check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.deregisterCriticalServiceAfter">deregisterCriticalServiceAfter</a></code> | <code>string</code> | The time after which the service is automatically deregistered when in the `critical` state. Defaults to `30s`. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.http">http</a></code> | <code>string</code> | The HTTP endpoint to call for an HTTP check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.method">method</a></code> | <code>string</code> | The method to use for HTTP health-checks. Defaults to `GET`. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.notes">notes</a></code> | <code>string</code> | An opaque field meant to hold human readable text. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.status">status</a></code> | <code>string</code> | The initial health-check status. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.tcp">tcp</a></code> | <code>string</code> | The TCP address and port to connect to for a TCP check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.tlsSkipVerify">tlsSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to deactivate certificate verification for HTTP health-checks. Defaults to `false`. |

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdktf/provider-consul.service.ServiceCheck.property.checkId"></a>

```typescript
public readonly checkId: string;
```

- *Type:* string

An ID, *unique per agent*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#check_id Service#check_id}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-consul.service.ServiceCheck.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

The interval to wait between each health-check invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#interval Service#interval}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.service.ServiceCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the health-check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#name Service#name}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-consul.service.ServiceCheck.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Specifies a timeout for outgoing connections in the case of a HTTP or TCP check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#timeout Service#timeout}

---

##### `deregisterCriticalServiceAfter`<sup>Optional</sup> <a name="deregisterCriticalServiceAfter" id="@cdktf/provider-consul.service.ServiceCheck.property.deregisterCriticalServiceAfter"></a>

```typescript
public readonly deregisterCriticalServiceAfter: string;
```

- *Type:* string

The time after which the service is automatically deregistered when in the `critical` state. Defaults to `30s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#deregister_critical_service_after Service#deregister_critical_service_after}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.service.ServiceCheck.property.header"></a>

```typescript
public readonly header: IResolvable | ServiceCheckHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#header Service#header}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-consul.service.ServiceCheck.property.http"></a>

```typescript
public readonly http: string;
```

- *Type:* string

The HTTP endpoint to call for an HTTP check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#http Service#http}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-consul.service.ServiceCheck.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The method to use for HTTP health-checks. Defaults to `GET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#method Service#method}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-consul.service.ServiceCheck.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

An opaque field meant to hold human readable text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#notes Service#notes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-consul.service.ServiceCheck.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The initial health-check status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#status Service#status}

---

##### `tcp`<sup>Optional</sup> <a name="tcp" id="@cdktf/provider-consul.service.ServiceCheck.property.tcp"></a>

```typescript
public readonly tcp: string;
```

- *Type:* string

The TCP address and port to connect to for a TCP check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#tcp Service#tcp}

---

##### `tlsSkipVerify`<sup>Optional</sup> <a name="tlsSkipVerify" id="@cdktf/provider-consul.service.ServiceCheck.property.tlsSkipVerify"></a>

```typescript
public readonly tlsSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to deactivate certificate verification for HTTP health-checks. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#tls_skip_verify Service#tls_skip_verify}

---

### ServiceCheckHeader <a name="ServiceCheckHeader" id="@cdktf/provider-consul.service.ServiceCheckHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.service.ServiceCheckHeader.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

const serviceCheckHeader: service.ServiceCheckHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeader.property.name">name</a></code> | <code>string</code> | The name of the header. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeader.property.value">value</a></code> | <code>string[]</code> | The header's list of values. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.service.ServiceCheckHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#name Service#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.ServiceCheckHeader.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

The header's list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#value Service#value}

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-consul.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.service.ServiceConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

const serviceConfig: service.ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.name">name</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.nodeAttribute">nodeAttribute</a></code> | <code>string</code> | The name of the node the to register the service on. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.address">address</a></code> | <code>string</code> | The address of the service. Defaults to the address of the node. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.check">check</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>[]</code> | check block. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.datacenter">datacenter</a></code> | <code>string</code> | The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.enableTagOverride">enableTagOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies to disable the anti-entropy feature for this service's tags. Defaults to `false`. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.external">external</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#external Service#external}. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | A map of arbitrary KV metadata linked to the service instance. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace to create the service within. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.partition">partition</a></code> | <code>string</code> | The partition the service is associated with. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.port">port</a></code> | <code>number</code> | The port of the service. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.serviceId">serviceId</a></code> | <code>string</code> | If the service ID is not provided, it will be defaulted to the value of the `name` attribute. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of values that are opaque to Consul, but can be used to distinguish between services or nodes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.service.ServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.service.ServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.service.ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.service.ServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.service.ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.service.ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.service.ServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.service.ServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#name Service#name}

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-consul.service.ServiceConfig.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: string;
```

- *Type:* string

The name of the node the to register the service on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#node Service#node}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-consul.service.ServiceConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The address of the service. Defaults to the address of the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#address Service#address}

---

##### `check`<sup>Optional</sup> <a name="check" id="@cdktf/provider-consul.service.ServiceConfig.property.check"></a>

```typescript
public readonly check: IResolvable | ServiceCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>[]

check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#check Service#check}

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.service.ServiceConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#datacenter Service#datacenter}

---

##### `enableTagOverride`<sup>Optional</sup> <a name="enableTagOverride" id="@cdktf/provider-consul.service.ServiceConfig.property.enableTagOverride"></a>

```typescript
public readonly enableTagOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies to disable the anti-entropy feature for this service's tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#enable_tag_override Service#enable_tag_override}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-consul.service.ServiceConfig.property.external"></a>

```typescript
public readonly external: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#external Service#external}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.service.ServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.service.ServiceConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of arbitrary KV metadata linked to the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#meta Service#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.service.ServiceConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace to create the service within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#namespace Service#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.service.ServiceConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition the service is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#partition Service#partition}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-consul.service.ServiceConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#port Service#port}

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktf/provider-consul.service.ServiceConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

If the service ID is not provided, it will be defaulted to the value of the `name` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#service_id Service#service_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-consul.service.ServiceConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of values that are opaque to Consul, but can be used to distinguish between services or nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/service#tags Service#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCheckHeaderList <a name="ServiceCheckHeaderList" id="@cdktf/provider-consul.service.ServiceCheckHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

new service.ServiceCheckHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.get"></a>

```typescript
public get(index: number): ServiceCheckHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceCheckHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>[]

---


### ServiceCheckHeaderOutputReference <a name="ServiceCheckHeaderOutputReference" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

new service.ServiceCheckHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceCheckHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>

---


### ServiceCheckList <a name="ServiceCheckList" id="@cdktf/provider-consul.service.ServiceCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

new service.ServiceCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.service.ServiceCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.service.ServiceCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.service.ServiceCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.service.ServiceCheckList.get"></a>

```typescript
public get(index: number): ServiceCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.service.ServiceCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.service.ServiceCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.service.ServiceCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.service.ServiceCheckList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>[]

---


### ServiceCheckOutputReference <a name="ServiceCheckOutputReference" id="@cdktf/provider-consul.service.ServiceCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-consul'

new service.ServiceCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetDeregisterCriticalServiceAfter">resetDeregisterCriticalServiceAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHttp">resetHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTcp">resetTcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTlsSkipVerify">resetTlsSkipVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ServiceCheckHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>[]

---

##### `resetDeregisterCriticalServiceAfter` <a name="resetDeregisterCriticalServiceAfter" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetDeregisterCriticalServiceAfter"></a>

```typescript
public resetDeregisterCriticalServiceAfter(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHttp"></a>

```typescript
public resetHttp(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTcp` <a name="resetTcp" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTcp"></a>

```typescript
public resetTcp(): void
```

##### `resetTlsSkipVerify` <a name="resetTlsSkipVerify" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTlsSkipVerify"></a>

```typescript
public resetTlsSkipVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList">ServiceCheckHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkIdInput">checkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfterInput">deregisterCriticalServiceAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.httpInput">httpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcpInput">tcpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerifyInput">tlsSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkId">checkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfter">deregisterCriticalServiceAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.http">http</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcp">tcp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerify">tlsSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.header"></a>

```typescript
public readonly header: ServiceCheckHeaderList;
```

- *Type:* <a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList">ServiceCheckHeaderList</a>

---

##### `checkIdInput`<sup>Optional</sup> <a name="checkIdInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkIdInput"></a>

```typescript
public readonly checkIdInput: string;
```

- *Type:* string

---

##### `deregisterCriticalServiceAfterInput`<sup>Optional</sup> <a name="deregisterCriticalServiceAfterInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfterInput"></a>

```typescript
public readonly deregisterCriticalServiceAfterInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ServiceCheckHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheckHeader">ServiceCheckHeader</a>[]

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.httpInput"></a>

```typescript
public readonly httpInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tcpInput`<sup>Optional</sup> <a name="tcpInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcpInput"></a>

```typescript
public readonly tcpInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `tlsSkipVerifyInput`<sup>Optional</sup> <a name="tlsSkipVerifyInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerifyInput"></a>

```typescript
public readonly tlsSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkId`<sup>Required</sup> <a name="checkId" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkId"></a>

```typescript
public readonly checkId: string;
```

- *Type:* string

---

##### `deregisterCriticalServiceAfter`<sup>Required</sup> <a name="deregisterCriticalServiceAfter" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfter"></a>

```typescript
public readonly deregisterCriticalServiceAfter: string;
```

- *Type:* string

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.http"></a>

```typescript
public readonly http: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcp"></a>

```typescript
public readonly tcp: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `tlsSkipVerify`<sup>Required</sup> <a name="tlsSkipVerify" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerify"></a>

```typescript
public readonly tlsSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceCheck;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.service.ServiceCheck">ServiceCheck</a>

---



