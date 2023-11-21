# `data_consul_service_health`

Refer to the Terraform Registory for docs: [`data_consul_service_health`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health).

# `dataConsulServiceHealth` Submodule <a name="`dataConsulServiceHealth` Submodule" id="@cdktf/provider-consul.dataConsulServiceHealth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulServiceHealth <a name="DataConsulServiceHealth" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health consul_service_health}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealth(scope: Construct, id: string, config: DataConsulServiceHealthConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig">DataConsulServiceHealthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig">DataConsulServiceHealthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetPassing">resetPassing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetWaitFor">resetWaitFor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNear"></a>

```typescript
public resetNear(): void
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNodeMeta"></a>

```typescript
public resetNodeMeta(): void
```

##### `resetPassing` <a name="resetPassing" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetPassing"></a>

```typescript
public resetPassing(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetWaitFor` <a name="resetWaitFor" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetWaitFor"></a>

```typescript
public resetWaitFor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulServiceHealth resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isConstruct"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

dataConsulServiceHealth.DataConsulServiceHealth.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformElement"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

dataConsulServiceHealth.DataConsulServiceHealth.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformDataSource"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

dataConsulServiceHealth.DataConsulServiceHealth.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataConsulServiceHealth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulServiceHealth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulServiceHealth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulServiceHealth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.results">results</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList">DataConsulServiceHealthResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nearInput">nearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMetaInput">nodeMetaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passingInput">passingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitForInput">waitForInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.near">near</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passing">passing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitFor">waitFor</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.results"></a>

```typescript
public readonly results: DataConsulServiceHealthResultsList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList">DataConsulServiceHealthResultsList</a>

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nearInput"></a>

```typescript
public readonly nearInput: string;
```

- *Type:* string

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMetaInput"></a>

```typescript
public readonly nodeMetaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passingInput`<sup>Optional</sup> <a name="passingInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passingInput"></a>

```typescript
public readonly passingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `waitForInput`<sup>Optional</sup> <a name="waitForInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitForInput"></a>

```typescript
public readonly waitForInput: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passing`<sup>Required</sup> <a name="passing" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passing"></a>

```typescript
public readonly passing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `waitFor`<sup>Required</sup> <a name="waitFor" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitFor"></a>

```typescript
public readonly waitFor: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulServiceHealthConfig <a name="DataConsulServiceHealthConfig" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

const dataConsulServiceHealthConfig: dataConsulServiceHealth.DataConsulServiceHealthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#name DataConsulServiceHealth#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.datacenter">datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#datacenter DataConsulServiceHealth#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#filter DataConsulServiceHealth#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#id DataConsulServiceHealth#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.near">near</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#near DataConsulServiceHealth#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#node_meta DataConsulServiceHealth#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.passing">passing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#passing DataConsulServiceHealth#passing}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#tag DataConsulServiceHealth#tag}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.waitFor">waitFor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#wait_for DataConsulServiceHealth#wait_for}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#name DataConsulServiceHealth#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#datacenter DataConsulServiceHealth#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#filter DataConsulServiceHealth#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#id DataConsulServiceHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#near DataConsulServiceHealth#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#node_meta DataConsulServiceHealth#node_meta}.

---

##### `passing`<sup>Optional</sup> <a name="passing" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.passing"></a>

```typescript
public readonly passing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#passing DataConsulServiceHealth#passing}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#tag DataConsulServiceHealth#tag}.

---

##### `waitFor`<sup>Optional</sup> <a name="waitFor" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.waitFor"></a>

```typescript
public readonly waitFor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/service_health#wait_for DataConsulServiceHealth#wait_for}.

---

### DataConsulServiceHealthResults <a name="DataConsulServiceHealthResults" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

const dataConsulServiceHealthResults: dataConsulServiceHealth.DataConsulServiceHealthResults = { ... }
```


### DataConsulServiceHealthResultsChecks <a name="DataConsulServiceHealthResultsChecks" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

const dataConsulServiceHealthResultsChecks: dataConsulServiceHealth.DataConsulServiceHealthResultsChecks = { ... }
```


### DataConsulServiceHealthResultsNode <a name="DataConsulServiceHealthResultsNode" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

const dataConsulServiceHealthResultsNode: dataConsulServiceHealth.DataConsulServiceHealthResultsNode = { ... }
```


### DataConsulServiceHealthResultsService <a name="DataConsulServiceHealthResultsService" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

const dataConsulServiceHealthResultsService: dataConsulServiceHealth.DataConsulServiceHealthResultsService = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulServiceHealthResultsChecksList <a name="DataConsulServiceHealthResultsChecksList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.get"></a>

```typescript
public get(index: number): DataConsulServiceHealthResultsChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataConsulServiceHealthResultsChecksOutputReference <a name="DataConsulServiceHealthResultsChecksOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.nodeAttribute">nodeAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.output">output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceTags">serviceTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks">DataConsulServiceHealthResultsChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceTags`<sup>Required</sup> <a name="serviceTags" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceTags"></a>

```typescript
public readonly serviceTags: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataConsulServiceHealthResultsChecks;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks">DataConsulServiceHealthResultsChecks</a>

---


### DataConsulServiceHealthResultsList <a name="DataConsulServiceHealthResultsList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.get"></a>

```typescript
public get(index: number): DataConsulServiceHealthResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataConsulServiceHealthResultsNodeList <a name="DataConsulServiceHealthResultsNodeList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.get"></a>

```typescript
public get(index: number): DataConsulServiceHealthResultsNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataConsulServiceHealthResultsNodeOutputReference <a name="DataConsulServiceHealthResultsNodeOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.taggedAddresses">taggedAddresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode">DataConsulServiceHealthResultsNode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.meta"></a>

```typescript
public readonly meta: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `taggedAddresses`<sup>Required</sup> <a name="taggedAddresses" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.taggedAddresses"></a>

```typescript
public readonly taggedAddresses: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataConsulServiceHealthResultsNode;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode">DataConsulServiceHealthResultsNode</a>

---


### DataConsulServiceHealthResultsOutputReference <a name="DataConsulServiceHealthResultsOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.checks">checks</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList">DataConsulServiceHealthResultsChecksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.nodeAttribute">nodeAttribute</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList">DataConsulServiceHealthResultsNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList">DataConsulServiceHealthResultsServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults">DataConsulServiceHealthResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.checks"></a>

```typescript
public readonly checks: DataConsulServiceHealthResultsChecksList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList">DataConsulServiceHealthResultsChecksList</a>

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: DataConsulServiceHealthResultsNodeList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList">DataConsulServiceHealthResultsNodeList</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.service"></a>

```typescript
public readonly service: DataConsulServiceHealthResultsServiceList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList">DataConsulServiceHealthResultsServiceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataConsulServiceHealthResults;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults">DataConsulServiceHealthResults</a>

---


### DataConsulServiceHealthResultsServiceList <a name="DataConsulServiceHealthResultsServiceList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.get"></a>

```typescript
public get(index: number): DataConsulServiceHealthResultsServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataConsulServiceHealthResultsServiceOutputReference <a name="DataConsulServiceHealthResultsServiceOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer"></a>

```typescript
import { dataConsulServiceHealth } from '@cdktf/provider-consul'

new dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService">DataConsulServiceHealthResultsService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.meta"></a>

```typescript
public readonly meta: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataConsulServiceHealthResultsService;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService">DataConsulServiceHealthResultsService</a>

---



